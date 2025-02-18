import Dashboard from '../components/Dashboard';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();

  if (typeof window === 'undefined') {
    return null;
  }

  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/client-portal');
    }
  }, [user, router]);

  if (!user) return null;

  return <Dashboard />;
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
}; 