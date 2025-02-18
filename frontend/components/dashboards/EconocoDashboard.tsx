import { useState, useEffect } from 'react';
import { UserProfile, ClientGroup } from '../../types/user';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';
import { db } from '../../config/firebase';

interface EconocoDashboardProps {
  userProfile: UserProfile;
  clientGroup: ClientGroup | null;
}

export default function EconocoDashboard({ userProfile, clientGroup }: EconocoDashboardProps) {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Econoco Digital Portal</h1>
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
          {/* Digital Maturity Assessment Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Digital Maturity Assessment Report</h2>
              <Link 
                href="/assessment-app"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Launch Report
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 