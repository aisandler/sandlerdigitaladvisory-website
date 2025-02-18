import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../config/firebase-admin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { idToken } = req.body;

  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    res.setHeader(
      'Set-Cookie',
      `session=${sessionCookie}; Max-Age=${expiresIn}; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    return res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Session creation error:', error);
    return res.status(401).json({ error: 'Unauthorized request' });
  }
} 