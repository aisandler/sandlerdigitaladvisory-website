import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCW1J7vqYyhSCaB4egJlmwFj0b1Efyd75I",
  authDomain: "sda-client-portal.firebaseapp.com",
  projectId: "sda-client-portal",
  storageBucket: "sda-client-portal.appspot.com",
  messagingSenderId: "608424811993",
  appId: "1:608424811993:web:da7b03d4fc620cb65a4dc8"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  hd: "sandlerdigitaladvisory.com"
});

export { auth, db, storage, googleProvider }; 