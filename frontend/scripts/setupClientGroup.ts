// @ts-nocheck
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
const envPath = resolve(__dirname, '../.env.local');
console.log('Loading environment variables from:', envPath);
config({ path: envPath });

// Initialize Firebase Admin after loading environment variables
import { db } from '../config/firebase-admin';

const clientGroupId = 'group-1736484195520'; // Your existing group ID
const userId = 'cs34xjeLlQOWWhA3Z48DXC2q3nD3'; // Your user ID

async function setupClientGroup() {
  console.log('Starting client group setup...');
  console.log('Environment variables loaded:', {
    projectId: !!process.env.FIREBASE_PROJECT_ID,
    clientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: !!process.env.FIREBASE_PRIVATE_KEY
  });
  
  try {
    // First check if the client group already exists
    const existingGroup = await db.collection('clientGroups').doc(clientGroupId).get();
    
    if (existingGroup.exists) {
      console.log('Client group already exists, updating...');
    }

    const clientGroupData = {
      id: clientGroupId,
      name: 'Econoco',
      clients: [userId], // Add your user ID to the clients array
      managers: [], // Add manager IDs if needed
      settings: {
        assessmentTypes: ['digital-marketing'],
        features: ['assessment', 'analytics', 'competitive-analysis', 'implementation'],
        customization: {
          description: 'Econoco Digital Marketing Strategy & Implementation',
          theme: 'default',
          modules: ['marketing-assessment', 'analytics-framework', 'competitive-landscape', 'digital-strategy']
        }
      }
    };

    // Create or update the client group
    await db.collection('clientGroups').doc(clientGroupId).set(clientGroupData, { merge: true });
    console.log('Client group created/updated successfully');

    // Now update the user document to include the client group ID
    await db.collection('users').doc(userId).set({
      clientGroupId: clientGroupId,
      role: 'client'
    }, { merge: true });
    console.log('User document updated with client group ID');

  } catch (error) {
    console.error('Error in setupClientGroup:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    process.exit(1);
  }
}

// Only run the setup if this file is being executed directly
if (require.main === module) {
  console.log('Running setup script directly...');
  setupClientGroup().then(() => {
    console.log('Setup completed successfully');
    process.exit(0);
  }).catch(error => {
    console.error('Setup failed:', error);
    process.exit(1);
  });
} 