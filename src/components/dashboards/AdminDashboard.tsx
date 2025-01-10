import { useState, useEffect } from 'react';
import { UserProfile, ClientGroup } from '../../types/user';
import { db, auth } from '../../config/firebase';
import { collection, query, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../providers/AuthProvider';
import dynamic from 'next/dynamic';

interface AdminDashboardProps {
  userProfile: UserProfile;
}

// Dynamically import ClientDashboard to avoid SSR issues
const ClientDashboard = dynamic(
  () => import('./ClientDashboard'),
  { ssr: false }
);

export default function AdminDashboard({ userProfile }: AdminDashboardProps) {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [clientGroups, setClientGroups] = useState<ClientGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserData, setNewUserData] = useState({
    email: '',
    name: '',
    role: 'client',
    clientGroupId: ''
  });
  const [newGroupData, setNewGroupData] = useState({
    name: '',
    description: '',
    features: ['assessments'] // Default features
  });
  const [selectedDashboard, setSelectedDashboard] = useState<'admin' | 'client'>('admin');
  const { signOut } = useAuth();

  // Fetch users and client groups
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch users
        const usersQuery = query(collection(db, 'users'));
        const usersSnapshot = await getDocs(usersQuery);
        const userData = usersSnapshot.docs.map(doc => ({ ...doc.data(), uid: doc.id }) as UserProfile);
        setUsers(userData);

        // Fetch client groups
        const groupsQuery = query(collection(db, 'clientGroups'));
        const groupsSnapshot = await getDocs(groupsQuery);
        const groupsData = groupsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }) as ClientGroup);
        setClientGroups(groupsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Create new user with Firebase Auth and Firestore profile
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newUserData.email,
        'tempPassword123!' // You should implement a secure way to handle initial passwords
      );

      // Create user profile
      const userProfile: UserProfile = {
        uid: userCredential.user.uid,
        email: newUserData.email,
        name: newUserData.name,
        role: newUserData.role as 'client' | 'admin' | 'manager',
        clientGroupId: newUserData.clientGroupId,
        organizationId: 'econoco',
        accessLevel: 1
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), userProfile);

      // Update users list
      setUsers([...users, userProfile]);
      
      // Reset form
      setNewUserData({
        email: '',
        name: '',
        role: 'client',
        clientGroupId: ''
      });

      alert('User created successfully! Initial password: tempPassword123!');
    } catch (error: any) {
      alert(`Error creating user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const groupData: Partial<ClientGroup> = {
        id: `group-${Date.now()}`,
        name: newGroupData.name,
        clients: [],
        managers: [],
        settings: {
          assessmentTypes: ['executive', 'agency', 'technical'],
          features: newGroupData.features,
          customization: {
            description: newGroupData.description
          }
        }
      };

      await setDoc(doc(db, 'clientGroups', groupData.id!), groupData);
      setClientGroups([...clientGroups, groupData as ClientGroup]);
      
      setNewGroupData({
        name: '',
        description: '',
        features: ['assessments']
      });

      alert('Group created successfully!');
    } catch (error: any) {
      alert(`Error creating group: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // If viewing as client, render ClientDashboard
  if (selectedDashboard === 'client') {
    // Create a mock client profile for viewing as client
    const clientViewProfile: UserProfile = {
      ...userProfile,
      role: 'client',
      clientGroupId: clientGroups[0]?.id || undefined
    };

    return (
      <div>
        <div className="bg-blue-600 text-white px-4 py-2">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span>Viewing as Client</span>
            <button
              onClick={() => setSelectedDashboard('admin')}
              className="bg-white text-blue-600 px-4 py-1 rounded-md hover:bg-blue-50"
            >
              Back to Admin View
            </button>
          </div>
        </div>
        <ClientDashboard 
          userProfile={clientViewProfile}
          clientGroup={clientGroups[0] || null}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedDashboard('client')}
                className="text-blue-600 hover:text-blue-800"
              >
                View as Client
              </button>
              <button
                onClick={signOut}
                className="text-red-600 hover:text-red-800"
              >
                Sign Out
              </button>
              <span className="text-gray-600">{userProfile.email}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {/* Group Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Client Groups</h2>
            
            {/* Create New Group Form */}
            <form onSubmit={handleCreateGroup} className="mb-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Group Name</label>
                  <input
                    type="text"
                    value={newGroupData.name}
                    onChange={(e) => setNewGroupData({ ...newGroupData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <input
                    type="text"
                    value={newGroupData.description}
                    onChange={(e) => setNewGroupData({ ...newGroupData, description: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Group
                </button>
              </div>
            </form>

            {/* Groups List */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Members
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Features
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clientGroups.map((group) => (
                    <tr key={group.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{group.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {users.filter(u => u.clientGroupId === group.id).length} members
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {group.settings.features.join(', ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {/* Add edit functionality */}}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {/* Add view members functionality */}}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Members
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Create New User Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Create New User</h2>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={newUserData.name}
                    onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={newUserData.email}
                    onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="client">Client</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Client Group</label>
                  <select
                    value={newUserData.clientGroupId}
                    onChange={(e) => setNewUserData({ ...newUserData, clientGroupId: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Group</option>
                    {clientGroups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>

          {/* User Management */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
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
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Group
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.uid}>
                      <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {clientGroups.find(g => g.id === user.clientGroupId)?.name || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => {/* Add edit functionality */}}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {/* Add reset password functionality */}}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Reset Password
                        </button>
                      </td>
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