import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../providers/AuthProvider';
import dynamic from 'next/dynamic';

// Import the actual assessment app from your project directory
const AssessmentContent = dynamic(() => 
  // Update this path to point to your actual assessment app location
  import('../../assessment-app/src/App').then(mod => mod.default),
  { ssr: false }
);

export default function AssessmentWrapper() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link 
            href="/client-portal"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <AssessmentContent user={user} />
      </main>
    </div>
  );
} 