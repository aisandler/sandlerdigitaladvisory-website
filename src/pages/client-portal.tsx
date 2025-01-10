import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ClientDashboard from '../components/dashboards/ClientDashboard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ClientPortalPage() {
  const router = useRouter();

  // Use a try-catch for the auth hook
  try {
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading, router]);

    // Show loading state
    if (loading || !user) {
      return <LoadingSpinner />;
    }

    // Show dashboard when user is authenticated
    return <ClientDashboard />;
  } catch (error) {
    console.error('Auth error:', error);
    // Redirect on error
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
    return <LoadingSpinner />;
  }
}

// Force server-side rendering
export const getServerSideProps = async () => {
  return {
    props: {},
  };
}; 