import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/providers/AuthProvider';
import AssessmentLayout from '@/components/assessment/AssessmentLayout';

export default function AssessmentApp() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return <AssessmentLayout />;
} 