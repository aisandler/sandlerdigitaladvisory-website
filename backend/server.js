const express = require('express');
const admin = require('firebase-admin'); // Import Firebase Admin SDK
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = process.env.PORT || 3001; // Choose a port, different from your frontend (e.g., 3001)

// Initialize Firebase Admin SDK
// **IMPORTANT:** Replace with your actual service account credentials!
const serviceAccount = require('./serviceAccountKey.json'); // Path to your service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // Get Firestore database

// Enable CORS for all origins (for development - be more specific in production!)
app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from your frontend origin
}));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

app.get('/api/client-portal-data', async (req, res) => {
  const userId = req.query.userId; // Get userId from query parameter

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId parameter' });
  }

  try {
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userProfile = userDoc.data();

    let clientGroup = null;
    if (userProfile.clientGroupId) {
      const groupDoc = await db.collection('clientGroups').doc(userProfile.clientGroupId).get();
      if (groupDoc.exists) {
        clientGroup = groupDoc.data();
      }
    }

    res.json({ userProfile, clientGroup });

  } catch (error) {
    console.error('Error fetching client portal data:', error);
    res.status(500).json({ error: 'Failed to fetch client portal data' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
}); 