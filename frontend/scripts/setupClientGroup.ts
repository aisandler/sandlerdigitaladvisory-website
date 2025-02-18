// @ts-nocheck
import { db } from '../config/firebase-admin';

const clientGroupId = 'group-1736484195520'; // Your existing group ID
const userId = 'cs34xjeLlQOWWhA3Z48DXC2q3nD3'; // Your user ID

async function setupClientGroup() {
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

// Only run the setup if this file is being executed directly
if (require.main === module) {
  setupClientGroup();
} 