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

  // Use useAuth after checking for client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const { user } = useAuth();
    
    if (!user) {
      router.push('/login');
      return;
    }

    // Fetch user profile and client group
    const fetchData = async () => {
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
    };

    fetchData();
  }, [mounted, router]);

  // Don't render anything until mounted
  if (!mounted) return null;

  const { user } = useAuth();
  if (!user || !userProfile || !clientGroup) return null;

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