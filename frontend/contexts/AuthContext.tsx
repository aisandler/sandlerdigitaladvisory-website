import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { 
  signInWithEmailAndPassword as firebaseSignInWithEmail,
  signInWithPopup as firebaseSignInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
  type Auth,
  type GoogleAuthProvider as GoogleAuthProviderType
} from 'firebase/auth';
import { doc, getDoc, type Firestore } from 'firebase/firestore';
import { auth as firebaseAuth, db as firebaseDb, googleProvider as firebaseGoogleProvider } from '../config/firebase';
import type { UserRole } from '../types/portal';

// Type the Firebase instances
const auth: Auth = firebaseAuth;
const db: Firestore = firebaseDb;
const googleProvider: GoogleAuthProviderType = firebaseGoogleProvider;

interface AuthUser extends User {
  role?: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isAdminViewingAsClient: boolean;
  setAdminViewingAsClient: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => { throw new Error('AuthContext not initialized') },
  signInWithGoogle: async () => { throw new Error('AuthContext not initialized') },
  signOut: async () => { throw new Error('AuthContext not initialized') },
  isAdminViewingAsClient: false,
  setAdminViewingAsClient: () => { throw new Error('AuthContext not initialized') }
});

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

async function createSession(user: User) {
  try {
    // Force token refresh to get latest claims
    const idToken = await user.getIdToken(true);
    
    const response = await fetch('/api/auth/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ idToken }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create session');
    }

    return true;
  } catch (error) {
    console.error('Session creation error:', error);
    throw error;
  }
}

async function clearSession() {
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to clear session');
    }

    return true;
  } catch (error) {
    console.error('Session clearing error:', error);
    throw error;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdminViewingAsClient, setAdminViewingAsClient] = useState(false);
  const router = useRouter();

  // Define auth functions outside of the provider value
  const handleSignIn = async (email: string, password: string) => {
    try {
      await firebaseSignInWithEmail(auth, email, password);
      // Session will be created by the auth state change listener
    } catch (error: any) {
      console.error('Sign in error:', error);
      throw new Error(error.message || 'Failed to sign in');
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await firebaseSignInWithPopup(auth, googleProvider);
      // Session will be created by the auth state change listener
    } catch (error: any) {
      console.error('Google sign in error:', error);
      throw new Error(error.message || 'Failed to sign in with Google');
    }
  };

  const handleSignOut = async () => {
    try {
      // Clear Firebase auth first
      await firebaseSignOut(auth);
      
      // Then clear the session cookie
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      // Clear all state
      setUser(null);
      setLoading(false);
      
      // Force a hard redirect to login
      document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      window.location.replace('/login');
    } catch (error) {
      console.error('Sign out error:', error);
      // Even if there's an error, force clear everything
      setUser(null);
      document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      window.location.replace('/login');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // Get user document from Firestore
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          if (!userDoc.exists()) {
            console.error('User document not found');
            await firebaseSignOut(auth);
            setUser(null);
            return;
          }

          const userData = userDoc.data();
          
          // Get custom claims from token
          const idTokenResult = await firebaseUser.getIdTokenResult(true);
          const role = userData?.role || idTokenResult.claims.role as UserRole;

          // Create session
          await createSession(firebaseUser);
          
          setUser({
            ...firebaseUser,
            role
          });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Auth state change error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    signIn: handleSignIn,
    signInWithGoogle: handleSignInWithGoogle,
    signOut: handleSignOut,
    isAdminViewingAsClient,
    setAdminViewingAsClient
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 