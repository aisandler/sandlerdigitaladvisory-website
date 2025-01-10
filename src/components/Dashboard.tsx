import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../providers/AuthProvider';
import { UserProfile, ClientGroup } from '../types/user';
import AdminDashboard from './dashboards/AdminDashboard';
import ClientDashboard from './dashboards/ClientDashboard';
import ManagerDashboard from './dashboards/ManagerDashboard';
import { db } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import EconocoDashboard from './dashboards/EconocoDashboard';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [clientGroup, setClientGroup] = useState<ClientGroup | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUserData() {
      if (!user) {
        router.replace('/login');
        return;
      }

      try {
        // Fetch user profile
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (!userDoc.exists()) {
          setError('User profile not found');
          return;
        }

        const profile = userDoc.data() as UserProfile;
        setUserProfile(profile);

        // If user is part of a client group, fetch group data
        if (profile.clientGroupId) {
          const groupDoc = await getDoc(doc(db, 'clientGroups', profile.clientGroupId));
          if (groupDoc.exists()) {
            setClientGroup(groupDoc.data() as ClientGroup);
          }
        }
      } catch (err: any) {
        console.error('Error fetching user data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [user, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!userProfile) {
    router.replace('/login');
    return <LoadingSpinner />;
  }

  // Render different dashboards based on user role
  switch (userProfile.role) {
    case 'admin':
      return <AdminDashboard userProfile={userProfile} />;
    case 'client':
      // Check if user is from Econoco
      if (userProfile.organizationId === 'econoco') {
        return <EconocoDashboard userProfile={userProfile} clientGroup={clientGroup} />;
      }
      // Default client dashboard for other organizations
      return <ClientDashboard userProfile={userProfile} clientGroup={clientGroup} />;
    case 'manager':
      return <ManagerDashboard userProfile={userProfile} clientGroup={clientGroup} />;
    default:
      return <ErrorMessage message="Invalid user role" />;
  }
} 