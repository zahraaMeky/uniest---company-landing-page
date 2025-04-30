import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import NewsletterTemplate from '@/components/NewsLetterTemplate'; 

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

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

  const {email} = req.body;
  console.log('Request email received:', req.body);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Uniest <onboarding@resend.dev>', //the sender
      to: ['support@uniest.om'], // Change to your desired recipient
      subject: '📬 New Newsletter Subscriber on Uniest',
      react: NewsletterTemplate({email}),
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
