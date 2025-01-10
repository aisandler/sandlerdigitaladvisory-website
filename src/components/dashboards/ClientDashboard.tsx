import React from 'react';
import { UserProfile, ClientGroup } from '../../types/user';
import { useAuth } from '../../providers/AuthProvider';
import { useRouter } from 'next/router';

interface ClientDashboardProps {
  userProfile: UserProfile;
  clientGroup: ClientGroup | null;
}

export default function ClientDashboard({ userProfile, clientGroup }: ClientDashboardProps) {
  const { signOut, user } = useAuth();
  const router = useRouter();
  const isEconoco = clientGroup?.name.toLowerCase().includes('econoco');

  const handleLaunchReport = async () => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      // Get fresh ID token
      const idToken = await user.getIdToken(true);
      
      // Navigate with auth state
      await router.push({
        pathname: '/assessment-app',
        query: { auth: 'true' }
      });
    } catch (error) {
      console.error('Failed to launch report:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Client Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{userProfile.email}</span>
              <button
                onClick={signOut}
                className="text-red-600 hover:text-red-800"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {/* Digital Maturity Assessment Section - Only show for Econoco */}
          {isEconoco && (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Digital Maturity Assessment Report</h2>
                <button 
                  onClick={handleLaunchReport}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Launch Report
                </button>
              </div>
            </div>
          )}

          {/* Client Group Info */}
          {clientGroup && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">
                {clientGroup.name}
              </h2>
              <p className="text-gray-600">
                {clientGroup.settings.customization.description}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 