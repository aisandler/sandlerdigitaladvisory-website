import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../config/firebase-admin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sessionCookie = req.cookies.session;
    if (!sessionCookie) {
      return res.status(401).json({ error: 'No session cookie found' });
    }

    const decodedClaims = await auth.verifySessionCookie(sessionCookie);
    return res.status(200).json({ uid: decodedClaims.uid });
  } catch (error) {
    console.error('Session verification error:', error);
    return res.status(401).json({ error: 'Invalid session' });
  }
} 