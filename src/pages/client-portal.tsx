import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ClientDashboard from '../components/dashboards/ClientDashboard';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { UserProfile, ClientGroup } from '../types/user';

export default function ClientPortalPage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [clientGroup, setClientGroup] = useState<ClientGroup | null>(null);
  const [mounted, setMounted] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const auth = useAuth();

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle auth check
  useEffect(() => {
    if (!mounted) return;
    
    if (!auth.user) {
      router.push('/login');
    }
    setAuthChecked(true);
  }, [mounted, auth.user, router]);

  // Handle data fetching
  useEffect(() => {
    if (!authChecked || !auth.user) return;

    const fetchData = async () => {
      try {
        if (!auth.user?.uid) return;

        const userDoc = await getDoc(doc(db, 'users', auth.user.uid));
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
  }, [authChecked, auth.user, router]);

  // Don't render until mounted
  if (!mounted) return null;

  // Show loading state
  if (!authChecked || !auth.user || !userProfile || !clientGroup) {
    return <div>Loading...</div>;
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