import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ClientDashboard from '../components/dashboards/ClientDashboard';
import LoadingSpinner from '../components/LoadingSpinner';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { UserProfile, ClientGroup } from '../types/user';

export default function ClientPortalPage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [clientGroup, setClientGroup] = useState<ClientGroup | null>(null);

  // Use a try-catch for the auth hook
  try {
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
        return;
      }

      // Fetch user data when authenticated
      if (user) {
        const fetchData = async () => {
          try {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
              const userData = userDoc.data() as UserProfile;
              setUserProfile(userData);

              if (userData.clientGroupId) {
                const groupDoc = await getDoc(doc(db, 'clientGroups', userData.clientGroupId));
                if (groupDoc.exists()) {
                  setClientGroup(groupDoc.data() as ClientGroup);
                }
              }
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            router.push('/login');
          }
        };

        fetchData();
      }
    }, [user, loading, router]);

    // Show loading state
    if (loading || !user || !userProfile || !clientGroup) {
      return <LoadingSpinner />;
    }

    // Show dashboard when user is authenticated and data is loaded
    return <ClientDashboard 
      userProfile={userProfile}
      clientGroup={clientGroup}
    />;
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