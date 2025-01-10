import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ClientDashboard from '../components/dashboards/ClientDashboard';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { UserProfile, ClientGroup } from '../types/user';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ClientPortalPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [clientGroup, setClientGroup] = useState<ClientGroup | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
      return;
    }

    if (user?.uid) {
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

  if (loading || !user) {
    return <LoadingSpinner />;
  }

  if (!userProfile || !clientGroup) {
    return <LoadingSpinner />;
  }

  return <ClientDashboard 
    userProfile={userProfile}
    clientGroup={clientGroup}
  />;
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
}; 