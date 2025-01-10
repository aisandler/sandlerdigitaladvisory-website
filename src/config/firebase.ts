import { initializeApp, getApps } from 'firebase/app';
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

// Initialize Firebase only if it hasn't been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app); 