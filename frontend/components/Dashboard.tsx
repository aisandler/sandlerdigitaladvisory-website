import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
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
  const { user, signOut } = useAuth();
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

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Client Portal</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={signOut}
                className="ml-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
} 