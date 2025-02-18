import React from 'react';
import { UserProfile, ClientGroup } from '../../types/user';
import { Project, Activity, FileItem } from '../../types/portal';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import ProjectComponentsGrid from '../grids/ProjectComponentsGrid';

interface ClientDashboardProps {
  userProfile: UserProfile | null;
  clientGroup: ClientGroup | null;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ userProfile, clientGroup }) => {
  console.log("ClientDashboard props received:", { userProfile, clientGroup });

  const { signOut, user } = useAuth();
  const router = useRouter();
  const isEconoco = clientGroup?.name.toLowerCase().includes('econoco');

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleLaunchReport = async () => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      // Navigate to assessment page with client ID
      await router.push({
        pathname: '/assessment',
        query: { clientId: user.uid }
      });
    } catch (error) {
      console.error('Failed to launch report:', error);
    }
  };

  const marketingComponents = [
    {
      id: 'assessment',
      title: 'Digital Marketing Assessment',
      description: 'Comprehensive evaluation of your digital marketing capabilities and opportunities.',
      status: 'completed',
      action: handleLaunchReport,
      actionText: 'View Report'
    },
    {
      id: 'analytics',
      title: 'Analytics Framework',
      description: 'Development of KPIs and analytics infrastructure to measure marketing performance.',
      status: 'active'
    },
    {
      id: 'competitive',
      title: 'Competitive Analysis',
      description: 'In-depth analysis of market position and competitive landscape.',
      status: 'pending'
    },
    {
      id: 'implementation',
      title: 'Implementation Plan',
      description: 'Detailed roadmap for executing the digital marketing strategy.',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Digital Marketing Strategy & Implementation Plan</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{userProfile?.email}</span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {/* Project Overview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold">Project Overview</h2>
                <p className="text-sm text-gray-600 mt-1">Digital Marketing Strategy & Implementation Plan for {clientGroup?.name}</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  In Progress
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Completed
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* Project Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingComponents.map((component) => (
              <div key={component.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold mb-2">{component.title}</h2>
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        component.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : component.status === 'completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {component.status === 'active' ? 'In Progress' : 
                         component.status === 'completed' ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{component.description}</p>
                  </div>
                </div>
                {component.action && (
                  <button 
                    onClick={component.action}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {component.actionText || 'View Details'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Project Timeline */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Project Timeline and Key Milestones</h2>
            <div className="space-y-4">
              {/* Add project timeline content here */}
            </div>
          </div>

          {/* Documents Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Project Documents</h2>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 text-sm"
                onClick={() => window.open('https://drive.google.com', '_blank')}
              >
                Open in Google Drive
              </a>
            </div>
            <div className="divide-y divide-gray-200">
              {/* Add document list content here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientDashboard; 