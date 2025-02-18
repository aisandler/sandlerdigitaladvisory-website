import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW1J7vqYyhSCaB4egJlmwFj0b1Efyd75I",
  authDomain: "sda-client-portal.firebaseapp.com",
  projectId: "sda-client-portal",
  storageBucket: "sda-client-portal.appspot.com",
  messagingSenderId: "608424811993",
  appId: "1:608424811993:web:da7b03d4fc620cb65a4dc8"
};

// Initialize Firebase only if it hasn't been initialized
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account',
  hd: 'sandlerdigitaladvisory.com'
});

console.log('Firebase initialized successfully');

export { auth, db, googleProvider }; 