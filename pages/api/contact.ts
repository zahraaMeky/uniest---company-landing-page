import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate'; 

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phoneNumber, company, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Uniest <onboarding@resend.dev>', //the sender
      to: ['eng.alzahraa.meky@gmail.com'], // Change to your desired recipient
      subject: 'Uniest New Contact Form Submission',
      react: EmailTemplate({ name, email, phoneNumber, company, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }

    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
}
