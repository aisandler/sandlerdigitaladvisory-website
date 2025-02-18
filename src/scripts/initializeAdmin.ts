const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// Read service account from JSON file
const serviceAccountPath = path.join(__dirname, '../../service-account.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();
const db = admin.firestore();

async function initializeAdmin() {
  try {
    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@sandlerdigitaladvisory.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'temporaryPassword123!';

    // Create or update admin user
    let adminUser;
    try {
      adminUser = await auth.getUserByEmail(adminEmail);
      console.log('Existing admin user found:', adminUser.uid);
    } catch (error) {
      // User doesn't exist, create new user
      console.log('Creating new admin user...');
      adminUser = await auth.createUser({
        email: adminEmail,
        password: adminPassword,
        emailVerified: true,
      });
    }

    // Set custom claims for admin role
    await auth.setCustomUserClaims(adminUser.uid, { role: 'admin' });
    console.log('Admin role assigned to user:', adminUser.uid);

    // Create or update user document in Firestore
    await db.collection('users').doc(adminUser.uid).set({
      email: adminEmail,
      role: 'admin',
      name: 'Admin User',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }, { merge: true });
    console.log('User document updated in Firestore');

    // Initialize required collections with proper security rules
    const collections = ['users', 'projects', 'clientGroups'];
    for (const collection of collections) {
      const collectionRef = db.collection(collection);
      const snapshot = await collectionRef.limit(1).get();
      if (snapshot.empty) {
        console.log(`Initializing ${collection} collection...`);
        // Add a dummy document that will be cleaned up later
        await collectionRef.doc('_init').set({
          _initialized: true,
          createdAt: new Date().toISOString(),
        });
      }
    }

    console.log(`
Admin user initialized successfully:
Email: ${adminEmail}
Password: ${adminPassword}
Please change the password after first login.
    `);

  } catch (error) {
    console.error('Error initializing admin:', error);
    process.exit(1);
  }
}

// Run the initialization
initializeAdmin().then(() => {
  console.log('Initialization complete');
  process.exit(0);
}); 