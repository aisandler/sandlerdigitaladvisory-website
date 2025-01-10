import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../providers/AuthProvider';

export default function AssessmentApp() {
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
        <div className="assessment-app">
          {/* Import and render your assessment components directly */}
          {/* For example: */}
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">Digital Maturity Assessment</h1>
            {/* Add your assessment content here */}
          </div>
        </div>
      </main>
    </div>
  );
} 