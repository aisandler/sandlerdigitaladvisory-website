import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../providers/AuthProvider';
import AssessmentLayout from '../../assessment-app/src/components/assessment/AssessmentLayout';

export default function AssessmentApp() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait for auth to initialize before redirecting
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Show loading state while auth is initializing
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Show layout only when user is authenticated
  if (user) {
    return <AssessmentLayout />;
  }

  // Return null while redirecting
  return null;
} 