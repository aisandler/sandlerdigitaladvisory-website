import type { NextApiRequest, NextApiResponse } from 'next';
import { auth, db } from '../../config/firebase-admin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Client portal data API called');
  
  try {
    // Verify the session cookie
    const sessionCookie = req.cookies.session || '';
    console.log('Session cookie present:', !!sessionCookie);
    
    if (!sessionCookie) {
      console.error('No session cookie found');
      return res.status(401).json({ error: 'Not authenticated' });
    }

    try {
      console.log('Attempting to verify session cookie...');
      const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
      console.log('Session cookie verified, user ID:', decodedClaims.uid);
      const userId = decodedClaims.uid;

      // Get user data
      console.log('Fetching user document for ID:', userId);
      const userDoc = await db.collection('users').doc(userId).get();
      if (!userDoc.exists) {
        console.error('User document not found:', userId);
        return res.status(404).json({ error: 'User not found' });
      }
      console.log('User document found');

      const userProfile = userDoc.data();
      let clientGroup = null;

      // Get client group data if it exists
      if (userProfile?.clientGroupId) {
        console.log('Fetching client group:', userProfile.clientGroupId);
        const groupDoc = await db.collection('clientGroups').doc(userProfile.clientGroupId).get();
        if (groupDoc.exists) {
          clientGroup = {
            id: groupDoc.id,
            ...groupDoc.data()
          };
          console.log('Client group found');
        } else {
          console.error('Client group not found:', userProfile.clientGroupId);
        }
      } else {
        console.error('No client group ID for user:', userId);
      }

      // Return the data
      console.log('Returning successful response');
      res.status(200).json({
        userProfile: {
          uid: userDoc.id,
          ...userProfile
        },
        clientGroup
      });
    } catch (verifyError: any) {
      console.error('Session verification error:', verifyError);
      console.error('Error details:', {
        name: verifyError.name,
        message: verifyError.message,
        code: verifyError.code,
        stack: verifyError.stack
      });
      return res.status(401).json({ error: 'Invalid session', details: verifyError.message });
    }
  } catch (error: any) {
    console.error('Error in /api/client-portal-data:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    res.status(500).json({ error: 'Failed to fetch client portal data', details: error.message });
  }
} 