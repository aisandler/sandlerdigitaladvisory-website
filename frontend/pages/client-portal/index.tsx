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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('ClientPortalPage effect running', { user, loading });
    
    if (!loading && !user) {
      console.log('No user, redirecting to login');
      router.push('/login');
      return;
    }

    if (user?.uid) {
      const fetchData = async () => {
        setDataLoading(true);
        setError(null);
        
        try {
          console.log('Fetching client portal data...');
          const response = await fetch('/api/client-portal-data');
          
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response:', {
              status: response.status,
              statusText: response.statusText,
              data: errorData
            });
            throw new Error(errorData.details || `HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          console.log('Client portal data received:', data);
          
          setUserProfile(data.userProfile);
          setClientGroup(data.clientGroup);

          // Route to the appropriate app based on client group
          if (data.clientGroup) {
            console.log('Routing based on client group:', data.clientGroup.name);
            if (data.clientGroup.name.toLowerCase().includes('econoco')) {
              router.replace('/client-portal/econoco/marketing-assessment/executive-summary');
            } else {
              router.replace('/client-portal/client2/overview');
            }
          } else {
            console.error('No client group found in response');
            setError('No client group assigned to your account');
          }
        } catch (error: any) {
          console.error('Error fetching client portal data:', error);
          setError(error.message || 'Failed to load portal data');
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

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Error Loading Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!user || !userProfile || !clientGroup) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Unable to Load Portal</h2>
          <p className="text-gray-600 mb-4">
            {!user ? 'Please log in to access the portal.' :
             !userProfile ? 'Unable to load your profile.' :
             'Unable to load your client group data.'}
          </p>
          <button
            onClick={() => router.push('/login')}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return <LoadingSpinner />;
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
}; 