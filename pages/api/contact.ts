import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message, phoneNumber, company } = req.body;

    if (!name || !email || !message || !phoneNumber || !company) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER_HOST,
      port: parseInt(process.env.SMTP_SERVER_PORT || '587', 10),
      secure: process.env.SMTP_SERVER_PORT === '465',
      auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color:#e9deea ; color: #000; border-radius: 8px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50; margin-bottom: 10px;">📩 New Contact Form Submission</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">
          You have received a new inquiry through your Uniest's contact form. The details submitted are listed below. Please review and respond at your earliest convenience.
        </p>
        <table style="width: 100%; border-collapse: collapse; background-color:#e9deea; margin-bottom: 20px;">
          <tbody>
            <tr>
              <td style="font-weight: bold; padding: 5px;">👤 Name:</td>
              <td style="padding: 5px;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 5px;">📧 Email:</td>
              <td style="padding: 5px;">${email}</td>
            </tr>
            ${phoneNumber ? `
            <tr>
              <td style="font-weight: bold; padding: 5px;">📱 Phone:</td>
              <td style="padding: 5px;">${phoneNumber}</td>
            </tr>` : ''}
            ${company ? `
            <tr>
              <td style="font-weight: bold; padding: 5px;">🏢 Company:</td>
              <td style="padding: 5px;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="font-weight: bold; padding: 5px;">📝 Message:</td>
              <td style="padding: 5px;">${message}</td>
            </tr>
          </tbody>
        </table>
        <p style="margin-top: 30px; font-size: 13px; color: #000;">
          This message was automatically sent from your website contact form.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_SERVER_USERNAME,
      to: process.env.SMTP_SERVER_USERNAME,
      subject: `📬 New Contact Message from ${name}`,
      html,
    });

    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}
