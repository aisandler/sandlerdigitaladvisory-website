import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [newClient, setNewClient] = useState({
    email: '',
    password: '',
    company: '',
    projects: [],
    documents: [],
    meetings: []
  });

  const createClient = async (e) => {
    e.preventDefault();
    try {
      // Create auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newClient.email,
        newClient.password
      );

      // Create client document
      await setDoc(doc(db, 'clients', userCredential.user.uid), {
        email: newClient.email,
        company: newClient.company,
        projects: [
          {
            name: "Initial Project",
            status: "Planning",
            progress: 0
          }
        ],
        documents: [],
        meetings: []
      });

      setNewClient({
        email: '',
        password: '',
        company: '',
        projects: [],
        documents: [],
        meetings: []
      });

      alert('Client created successfully!');
    } catch (error) {
      console.error('Error creating client:', error);
      alert(error.message);
    }
  };

  const uploadDocument = async (clientId, file) => {
    const storageRef = ref(storage, `documents/${clientId}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    
    const clientRef = doc(db, 'clients', clientId);
    await updateDoc(clientRef, {
      documents: arrayUnion({
        name: file.name,
        url: url,
        date: new Date().toISOString().split('T')[0]
      })
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Create New Client</h2>
        <form onSubmit={createClient} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={newClient.email}
              onChange={(e) => setNewClient({...newClient, email: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={newClient.password}
              onChange={(e) => setNewClient({...newClient, password: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              value={newClient.company}
              onChange={(e) => setNewClient({...newClient, company: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Client
          </button>
        </form>
      </div>
    </div>
  );
} 