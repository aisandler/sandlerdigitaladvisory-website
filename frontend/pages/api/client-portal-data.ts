import type { NextApiRequest, NextApiResponse } from 'next';
import { auth, db } from '../../config/firebase-admin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Verify the session cookie
    const sessionCookie = req.cookies.session || '';
    
    if (!sessionCookie) {
      console.error('No session cookie found');
      return res.status(401).json({ error: 'Not authenticated' });
    }

    try {
      const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
      const userId = decodedClaims.uid;

      // Get user data
      const userDoc = await db.collection('users').doc(userId).get();
      if (!userDoc.exists) {
        console.error('User document not found:', userId);
        return res.status(404).json({ error: 'User not found' });
      }

      const userProfile = userDoc.data();
      let clientGroup = null;

      // Get client group data if it exists
      if (userProfile?.clientGroupId) {
        const groupDoc = await db.collection('clientGroups').doc(userProfile.clientGroupId).get();
        if (groupDoc.exists) {
          clientGroup = {
            id: groupDoc.id,
            ...groupDoc.data()
          };
        } else {
          console.error('Client group not found:', userProfile.clientGroupId);
        }
      } else {
        console.error('No client group ID for user:', userId);
      }

      // Return the data
      res.status(200).json({
        userProfile: {
          uid: userDoc.id,
          ...userProfile
        },
        clientGroup
      });
    } catch (verifyError) {
      console.error('Session verification error:', verifyError);
      return res.status(401).json({ error: 'Invalid session' });
    }
  } catch (error) {
    console.error('Error in /api/client-portal-data:', error);
    res.status(500).json({ error: 'Failed to fetch client portal data' });
  }
} 