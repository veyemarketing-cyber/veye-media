import { Resend } from 'resend';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'vmccoy@veyemarketing.com';
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'Veye Media <onboarding@resend.dev>';

export default async function handler(req: any, res: any) {
  // Always handle GET safely (browser hits this)
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Ensure env var exists BEFORE creating Resend client
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Missing RESEND_API_KEY in Vercel Environment Variables (Production).',
    });
  }

  try {
    const {
      fullName,
      organization,
      email,
      operationalScale,
      growthBarrier,
      mandate,
      source,
      page,
    } = req.body || {};

    if (
      !fullName ||
      !organization ||
      !email ||
      !operationalScale ||
      !growthBarrier ||
      !mandate
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const resend = new Resend(apiKey);

    const subject = `Start a Conversation — ${fullName} (${organization})`;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text: `
Full Name: ${fullName}
Organization: ${organization}
Email: ${email}
Operational Scale: ${operationalScale}
Primary Barrier: ${growthBarrier}

Strategic Mandate:
${mandate}

Source: ${source || 'unknown'}
Page: ${page || 'unknown'}
      `.trim(),
    });

    if (error) {
      console.error('Resend send error:', error);
      return res.status(502).json({ error: 'Resend send failed', details: error });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('API /api/contact crashed:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
