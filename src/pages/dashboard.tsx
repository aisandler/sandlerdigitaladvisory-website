import Dashboard from '../components/Dashboard';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/client-portal');
    }
  }, [user, router]);

  if (!user) return null;

  return <Dashboard />;
} 