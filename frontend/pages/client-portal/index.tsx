import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import type { UserProfile, ClientGroup } from '../../types/user';

export default function ClientPortalPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [clientGroup, setClientGroup] = useState<ClientGroup | null>(null);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
      return;
    }

    if (user?.uid) {
      const fetchData = async () => {
        setDataLoading(true);
        try {
          const response = await fetch('/api/client-portal-data');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUserProfile(data.userProfile);
          setClientGroup(data.clientGroup);

          // Route to the appropriate app based on client group
          if (data.clientGroup) {
            if (data.clientGroup.name.toLowerCase().includes('econoco')) {
              router.replace('/client-portal/econoco/marketing-assessment/executive-summary');
            } else {
              // Default to overview for other clients
              router.replace('/client-portal/client2/overview');
            }
          }
        } catch (error) {
          console.error('Error fetching client portal data:', error);
        } finally {
          setDataLoading(false);
        }
      };

      fetchData();
    }
  }, [user, loading, router]);

  if (loading || dataLoading) {
    return <LoadingSpinner />;
  }

  if (!user || !userProfile || !clientGroup) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Error Loading Data</h2>
        <p className="text-gray-600">Unable to load your portal data. Please try again or contact support.</p>
      </div>
    </div>;
  }

  // This page should never render content directly anymore
  return <LoadingSpinner />;
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
}; 