import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Who receives notifications (you)
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'vmccoy@veyemarketing.com';

// Sender (safe default until you verify veyemedia.co in Resend)
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'Veye Media <onboarding@resend.dev>';

type LeadPayload = {
  fullName?: string;
  name?: string; // allow alt field name
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  website?: string;
  primaryGoal?: string;
  message?: string; // allow alt field name
  breakdown?: string[];
  operatingModel?: string;
  timeline?: string;
  budget?: string;
  crm?: string;
  crmIntegrated?: string;
  consent?: boolean;
  tier?: 'PRIORITY' | 'STANDARD';
};

function clean(str?: unknown) {
  return (str ?? '').toString().trim();
}

function isValidEmail(email?: unknown) {
  const e = clean(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function safeArray(arr?: unknown): string[] {
  return Array.isArray(arr) ? arr.map((x) => clean(x)) : [];
}

function buildText(payload: LeadPayload & { primaryGoalResolved: string; companyResolved: string; fullNameResolved: string }) {
  const breakdown = safeArray(payload.breakdown);

  return [
    `New Start a Conversation submission`,
    ``,
    `Tier: ${payload.tier || 'STANDARD'}`,
    ``,
    `Name: ${payload.fullNameResolved}`,
    `Company: ${payload.companyResolved}`,
    `Role: ${clean(payload.role)}`,
    `Email: ${clean(payload.email)}`,
    `Phone: ${clean(payload.phone)}`,
    `Website: ${clean(payload.website)}`,
    ``,
    `Primary goal / Message:`,
    `${payload.primaryGoalResolved}`,
    ``,
    `Where it breaks down:`,
    breakdown.length ? `- ${breakdown.join('\n- ')}` : `(none provided)`,
    ``,
    `Operating model: ${clean(payload.operatingModel)}`,
    `Timeline: ${clean(payload.timeline)}`,
    `Budget: ${clean(payload.budget)}`,
    `CRM: ${clean(payload.crm)}`,
    `CRM Integrated: ${clean(payload.crmIntegrated)}`,
    `Consent: ${payload.consent ? 'Yes' : 'No'}`,
    ``,
    `Timestamp: ${new Date().toISOString()}`,
  ].join('\n');
}

function parseBody(req: VercelRequest): any {
  // Vercel usually gives req.body as object, but depending on config it can be a string.
  const b: any = (req as any).body;

  if (!b) return {};
  if (typeof b === 'object') return b;

  if (typeof b === 'string') {
    try {
      return JSON.parse(b);
    } catch {
      // if it's not JSON, return a minimal object
      return { rawBody: b };
    }
  }

  return {};
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    // Env sanity checks
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: 'Missing RESEND_API_KEY' });
    }

    const payload: LeadPayload = parseBody(req);

    // Accept multiple possible field names
    const fullNameResolved = clean(payload.fullName) || clean(payload.name);
    const emailResolved = clean(payload.email);
    const companyResolved = clean(payload.company) || '(not provided)';
    const primaryGoalResolved = clean(payload.primaryGoal) || clean(payload.message);

    // VALIDATION: company is optional, message/primaryGoal is required
    if (!fullNameResolved || !isValidEmail(emailResolved) || !primaryGoalResolved) {
      return res.status(400).json({
        ok: false,
        error: 'Missing required fields',
        required: ['fullName(or name)', 'email', 'primaryGoal(or message)'],
        receivedKeys: Object.keys(payload || {}),
        receivedPreview: {
          fullName: clean(payload.fullName),
          name: clean(payload.name),
          email: clean(payload.email),
          company: clean(payload.company),
          primaryGoal: clean(payload.primaryGoal),
          message: clean(payload.message),
        },
      });
    }

    const tier = payload.tier || 'STANDARD';
    const subjectPrefix = tier === 'PRIORITY' ? '[PRIORITY]' : '[Lead]';
    const subject = `${subjectPrefix} Start a Conversation — ${companyResolved} (${fullNameResolved})`;

    const text = buildText({
      ...payload,
      tier,
      fullNameResolved,
      companyResolved,
      primaryGoalResolved,
    });

    const replyTo = isValidEmail(emailResolved) ? emailResolved : undefined;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      text,
      replyTo,
    });

    const anyResult = result as any;
    const resendError = anyResult?.error;
    const resendId = anyResult?.data?.id || anyResult?.id || null;

    if (resendError) {
      return res.status(500).json({
        ok: false,
        error: resendError?.message || 'Resend error',
        details: resendError,
      });
    }

    return res.status(200).json({
      ok: true,
      id: resendId,
      to: TO_EMAIL,
      from: FROM_EMAIL,
    });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: err?.message || 'Server error',
    });
  }
}
