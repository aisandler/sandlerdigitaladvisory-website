import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCW1J7vqYyhSCaB4egJlmwFj0b1Efyd75I",
  authDomain: "sda-client-portal.firebaseapp.com",
  projectId: "sda-client-portal",
  storageBucket: "sda-client-portal.firebasestorage.app",
  messagingSenderId: "608424811993",
  appId: "1:608424811993:web:da7b03d4fc620cb65a4dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Add this to debug
console.log('Firebase initialized with auth:', auth); 