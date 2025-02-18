import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import Dashboard from '../../components/Dashboard';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function ClientPortal() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    async function verifySession() {
      try {
        const response = await fetch('/api/auth/verify-session');
        if (!response.ok) {
          throw new Error('Invalid session');
        }
      } catch (error) {
        console.error('Session verification error:', error);
        router.replace('/login');
      }
    }

    if (!loading && !user) {
      verifySession();
    }
  }, [user, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null;
  }

  return <Dashboard />;
} 