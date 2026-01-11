import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Who receives notifications (you)
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'vmccoy@veyemarketing.com';

// Sender (safe default until you verify veyemedia.co in Resend)
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Veye Media <onboarding@resend.dev>';

type LeadPayload = {
  fullName?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  website?: string;
  primaryGoal?: string;
  breakdown?: string[];
  operatingModel?: string;
  timeline?: string;
  budget?: string;
  crm?: string;
  crmIntegrated?: string;
  consent?: boolean;
  tier?: 'PRIORITY' | 'STANDARD';
};

function clean(str?: string) {
  return (str || '').toString().trim();
}

function isValidEmail(email?: string) {
  const e = clean(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function safeArray(arr?: unknown): string[] {
  return Array.isArray(arr) ? arr.map(String) : [];
}

function buildText(payload: LeadPayload) {
  const breakdown = safeArray(payload.breakdown);

  return [
    `New Start a Conversation submission`,
    ``,
    `Tier: ${payload.tier || 'STANDARD'}`,
    ``,
    `Name: ${clean(payload.fullName)}`,
    `Company: ${clean(payload.company)}`,
    `Role: ${clean(payload.role)}`,
    `Email: ${clean(payload.email)}`,
    `Phone: ${clean(payload.phone)}`,
    `Website: ${clean(payload.website)}`,
    ``,
    `Primary goal:`,
    `${clean(payload.primaryGoal)}`,
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    // Basic env sanity check (so we don’t silently fail)
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: 'Missing RESEND_API_KEY' });
    }

    const payload: LeadPayload = req.body || {};

    if (
      !clean(payload.fullName) ||
      !clean(payload.company) ||
      !isValidEmail(payload.email) ||
      !clean(payload.primaryGoal)
    ) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const tier = payload.tier || 'STANDARD';
    const subjectPrefix = tier === 'PRIORITY' ? '[PRIORITY]' : '[Lead]';
    const subject = `${subjectPrefix} Start a Conversation — ${clean(payload.company)} (${clean(payload.fullName)})`;

    const text = buildText({ ...payload, tier });
    const replyTo = isValidEmail(payload.email) ? clean(payload.email) : undefined;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      text,
      replyTo,
    });

    // IMPORTANT: Handle both possible SDK shapes
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

    return res.status(200).json({ ok: true, id: resendId, to: TO_EMAIL, from: FROM_EMAIL });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      error: err?.message || 'Server error',
    });
  }
}
