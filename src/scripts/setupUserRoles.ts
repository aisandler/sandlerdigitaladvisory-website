import { db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

// Example user data
const users = [
  {
    uid: "your_admin_uid", // You'll get this from Firebase Auth
    email: "admin@sandlerdigital.ai",
    role: "admin",
    name: "Admin User",
    organizationId: "sandler-digital",
    accessLevel: 10
  },
  {
    uid: "client_uid_1",
    email: "client1@example.com",
    role: "client",
    clientGroupId: "group1",
    organizationId: "org1",
    name: "Client One",
    accessLevel: 1
  }
];

// Example client group
const clientGroups = [
  {
    id: "group1",
    name: "Enterprise Clients",
    clients: ["client_uid_1", "client_uid_2"],
    managers: ["manager_uid_1"],
    settings: {
      assessmentTypes: ["executive", "agency", "technical"],
      features: ["assessments", "reports", "meetings"],
      customization: {
        theme: "enterprise",
        modules: ["all"]
      }
    }
  }
];

// Function to set up users
async function setupUsers() {
  try {
    for (const user of users) {
      await setDoc(doc(db, 'users', user.uid), user);
      console.log(`Created user: ${user.email}`);
    }

    for (const group of clientGroups) {
      await setDoc(doc(db, 'clientGroups', group.id), group);
      console.log(`Created group: ${group.name}`);
    }

    console.log('Setup completed successfully');
  } catch (error) {
    console.error('Error setting up users:', error);
  }
}

// Run the setup
setupUsers(); 