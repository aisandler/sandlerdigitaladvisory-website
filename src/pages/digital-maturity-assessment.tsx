import AssessmentApp from '../components/AssessmentApp';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AssessmentPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/client-portal');
    }
  }, [user, router]);

  if (!user) return null;

  return <AssessmentApp />;
} 