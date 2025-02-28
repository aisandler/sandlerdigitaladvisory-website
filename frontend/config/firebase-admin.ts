import { getApps, cert, initializeApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin if it hasn't been initialized yet
function initAdmin() {
  try {
    console.log('Initializing Firebase Admin...');
    
    if (!getApps().length) {
      console.log('No existing Firebase Admin apps, creating new instance');
      
      // Check for required environment variables
      if (!process.env.FIREBASE_PROJECT_ID) {
        throw new Error('Missing FIREBASE_PROJECT_ID environment variable');
      }
      if (!process.env.FIREBASE_CLIENT_EMAIL) {
        throw new Error('Missing FIREBASE_CLIENT_EMAIL environment variable');
      }
      if (!process.env.FIREBASE_PRIVATE_KEY) {
        throw new Error('Missing FIREBASE_PRIVATE_KEY environment variable');
      }

      const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');
      console.log('Environment variables present:', {
        projectId: !!process.env.FIREBASE_PROJECT_ID,
        clientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: !!privateKey
      });

      try {
        const app = initializeApp({
          credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: privateKey,
          }),
        });
        
        console.log('Firebase Admin initialized successfully');
        return app;
      } catch (initError: any) {
        console.error('Firebase Admin initialization error:', {
          name: initError.name,
          message: initError.message,
          code: initError.code,
          stack: initError.stack
        });
        throw initError;
      }
    }
    
    console.log('Using existing Firebase Admin app');
    return getApps()[0];
  } catch (error: any) {
    console.error('Firebase Admin setup error:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    throw error;
  }
}

// Initialize the admin app
let app: App;
try {
  app = initAdmin();
  console.log('Firebase Admin app initialized');
} catch (error) {
  console.error('Failed to initialize Firebase Admin app:', error);
  throw error;
}

// Export the auth and db instances
const auth = getAuth(app);
const db = getFirestore(app);

console.log('Firebase Admin services initialized:', {
  auth: !!auth,
  db: !!db
});

// Export the initialization function for use in API routes
export { auth, db, initAdmin }; 