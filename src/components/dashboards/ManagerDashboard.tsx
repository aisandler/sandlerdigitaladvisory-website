import { useState, useEffect } from 'react';
import { UserProfile, ClientGroup } from '../../types/user';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface ManagerDashboardProps {
  userProfile: UserProfile;
  clientGroup: ClientGroup | null;
}

export default function ManagerDashboard({ userProfile, clientGroup }: ManagerDashboardProps) {
  const [clients, setClients] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      if (clientGroup) {
        const clientsQuery = query(
          collection(db, 'users'),
          where('clientGroupId', '==', clientGroup.id)
        );
        const snapshot = await getDocs(clientsQuery);
        const clientData = snapshot.docs.map(doc => doc.data() as UserProfile);
        setClients(clientData);
      }
      setLoading(false);
    }

    fetchClients();
  }, [clientGroup]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Manager Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-4">{userProfile.email}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {/* Client Group Overview */}
          {clientGroup && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">{clientGroup.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-600">Total Clients</h3>
                  <p className="text-2xl font-bold">{clients.length}</p>
                </div>
                {/* Add more metrics */}
              </div>
            </div>
          )}

          {/* Client List */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Clients</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client) => (
                    <tr key={client.uid}>
                      <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">Active</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 