import { config } from 'dotenv';
import { resolve } from 'path';
import { db } from '../config/firebase-admin';

// Load environment variables from scripts/.env
config({ path: resolve(__dirname, '.env') });

async function setupClientGroup() {
  const clientGroupId = 'group-1736484195520'; // Your existing group ID
  const userId = 'cs34xjeLlQOWWhA3Z48DXC2q3nD3'; // Your user ID

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

  try {
    await db.collection('clientGroups').doc(clientGroupId).set(clientGroupData);
    console.log('Client group created successfully');
  } catch (error) {
    console.error('Error creating client group:', error);
  }
}

// Run the setup
setupClientGroup(); 