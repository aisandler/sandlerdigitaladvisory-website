import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import AssessmentViewer from '../../components/assessment/AssessmentViewer';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function AssessmentPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null;
  }

  // Check if user has admin role
  const isAdmin = user.role === 'admin';
  console.log('User role:', user.role, 'Is admin:', isAdmin); // Debug log

  return (
    <AssessmentViewer isAdmin={isAdmin} />
  );
} 