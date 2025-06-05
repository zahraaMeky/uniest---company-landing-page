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
    const { email } = req.body;

    if (!email) {
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
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #e9deea; color: #333; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
        <h2 style="color: #000; margin-bottom: 10px;">📰 New Newsletter Subscription</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">
          A new user has subscribed to your newsletter. Below are the details:
        </p>
        <table style="width: 100%; border-collapse: collapse; background-color: #e9deea; margin-bottom: 20px;">
          <tbody>
            <tr>
              <td style="font-weight: bold; padding: 5px;">📧 Email:</td>
              <td style="padding: 5px;">${email}</td>
            </tr>
          </tbody>
        </table>
        <p style="margin-top: 30px; font-size: 13px; color: #000;">
          This is an automated message from your website.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_SERVER_USERNAME,
      to: process.env.SMTP_SERVER_USERNAME,
      subject: `📬 New Newsletter Subscriber on Uniest`,
      html,
    });

    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}
