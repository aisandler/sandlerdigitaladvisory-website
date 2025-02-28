import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { 
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../config/firebase';
import type { User } from '../types/user';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isAdminViewingAsClient: boolean;
  setAdminViewingAsClient: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdminViewingAsClient, setAdminViewingAsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let isSubscribed = true;
    console.log('Setting up auth state listener');
    
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (!isSubscribed) return;

        if (firebaseUser) {
          console.log('User authenticated:', firebaseUser.uid);
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          if (!userDoc.exists()) {
            console.log('User document not found, signing out');
            await firebaseSignOut(auth);
            if (isSubscribed) {
              setUser(null);
              router.push('/login');
            }
            return;
          }

          // Only create session if user document exists
          const idToken = await firebaseUser.getIdToken(true);
          await fetch('/api/auth/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ idToken }),
          });

          if (isSubscribed) {
            setUser(firebaseUser);
          }
        } else {
          console.log('No user authenticated');
          if (isSubscribed) {
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Auth state change error:', error);
        if (isSubscribed) {
          setUser(null);
        }
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    });

    return () => {
      isSubscribed = false;
      console.log('Cleaning up auth state listener');
      unsubscribe();
    };
  }, []); // Empty dependency array since we only want to set up the listener once

  const signIn = async (email: string, password: string): Promise<void> => {
    console.log('SignIn function called with:', email);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async (): Promise<void> => {
    console.log('SignInWithGoogle function called');
    await signInWithPopup(auth, googleProvider);
  };

  const signOut = async (): Promise<void> => {
    console.log('SignOut function called');
    await firebaseSignOut(auth);
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
  };

  const value = {
    user,
    loading,
    signIn,
    signInWithGoogle,
    signOut,
    isAdminViewingAsClient,
    setAdminViewingAsClient
  };

  console.log('AuthProvider rendering with value:', { 
    hasUser: !!user, 
    loading, 
    hasSignIn: !!signIn 
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  console.log('useAuth hook called, returning context with signIn:', !!context.signIn);
  return context;
}

export { AuthContext }; 