import { getApps, cert, initializeApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from the appropriate .env file
const envPath = process.env.NODE_ENV === 'development' 
  ? resolve(__dirname, '../scripts/.env')
  : resolve(__dirname, '../.env.local');

config({ path: envPath });

// Initialize Firebase Admin if it hasn't been initialized yet
function initAdmin() {
  try {
    if (!getApps().length) {
      const privateKey = process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        : undefined;

      if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !privateKey) {
        throw new Error('Missing Firebase Admin credentials');
      }

      const app = initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: privateKey,
        }),
      });
      
      console.log('Firebase Admin initialized successfully');
      return app;
    }
    
    return getApps()[0];
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
    throw error;
  }
}

// Initialize the admin app
const app = initAdmin();

// Export the auth and db instances
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export the initialization function for use in API routes
export { initAdmin }; 