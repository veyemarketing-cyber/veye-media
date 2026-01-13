import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Where YOU receive the form submissions
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'vmccoy@veyemarketing.com';

// Sender address (safe default until domain is verified in Resend)
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'Veye Media <onboarding@resend.dev>';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
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

    // Basic validation
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
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'Email provider error' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('API /contact error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
