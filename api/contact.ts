import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  // --- CORS HEADERS ---
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // --- HANDLE PREFLIGHT ---
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // --- BLOCK NON-POST ---
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // --- DEBUG (safe, SMTP-focused) ---
  console.log('HOST:', req.headers.host);
  console.log('SMTP_HOST set:', Boolean(process.env.SMTP_HOST));
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('CONTACT_FROM_EMAIL:', process.env.CONTACT_FROM_EMAIL);
  console.log('CONTACT_TO_EMAIL:', process.env.CONTACT_TO_EMAIL);

  // --- REQUIRED ENV VARS ---
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

  if (!SMTP_HOST) return res.status(500).json({ error: 'Missing SMTP_HOST' });
  if (!SMTP_PORT) return res.status(500).json({ error: 'Missing SMTP_PORT' });
  if (!SMTP_USER) return res.status(500).json({ error: 'Missing SMTP_USER' });
  if (!SMTP_PASS) return res.status(500).json({ error: 'Missing SMTP_PASS' });
  if (!FROM_EMAIL) return res.status(500).json({ error: 'Missing CONTACT_FROM_EMAIL' });
  if (!TO_EMAIL) return res.status(500).json({ error: 'Missing CONTACT_TO_EMAIL' });

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

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: false, // port 587 uses STARTTLS
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      requireTLS: true,
    });

    const subject = `Start a Conversation — ${fullName} (${organization})`;

    await transporter.sendMail({
      from: `Veye Media <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email, // reply goes to the lead who filled the form
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

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('SMTP send error:', err?.message || err, err);
    return res.status(500).json({ error: 'Email send failed' });
  }
}
