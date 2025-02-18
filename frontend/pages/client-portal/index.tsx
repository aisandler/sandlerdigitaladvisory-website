import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ClientDashboard from '../../components/dashboards/ClientDashboard';
import LoadingSpinner from '../../components/LoadingSpinner';
import type { UserProfile, ClientGroup } from '../../types/user';

export default function ClientPortalPage() {
  const { user, loading } = useAuth(); // Get user and loading state from AuthContext
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [clientGroup, setClientGroup] = useState<ClientGroup | null>(null);
  const [dataLoading, setDataLoading] = useState(false); // Separate loading state for data fetching

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
      return;
    }

    if (user?.uid) {
      const fetchData = async () => {
        setDataLoading(true); // Start data loading
        try {
          // Fetch data from the NEW API endpoint: /api/client-portal-data
          const response = await fetch('/api/client-portal-data'); // Changed URL here
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUserProfile(data.userProfile);
          setClientGroup(data.clientGroup);
        } catch (error) {
          console.error('Error fetching client portal data:', error);
          // Keep the error message, or handle differently as needed
          // router.push('/login'); // Maybe don't redirect to login on data fetch error
        } finally {
          setDataLoading(false); // End data loading
        }
      };

      fetchData();
    }
  }, [user, loading, router]);

  // Show loading spinner during initial auth loading or data loading
  if (loading || dataLoading) {
    return <LoadingSpinner />;
  }

  if (!user || !userProfile || !clientGroup) {
    return <div>Error loading data. Please try again.</div>; // Basic error message
  }

  console.log('userProfile before ClientDashboard:', userProfile);
  console.log('clientGroup before ClientDashboard:', clientGroup);

  return <ClientDashboard
    userProfile={userProfile}
    clientGroup={clientGroup}
  />;
}

// Force server-side rendering (optional, but might be good for initial load)
export const getServerSideProps = async () => {
  return {
    props: {},
  };
}; 