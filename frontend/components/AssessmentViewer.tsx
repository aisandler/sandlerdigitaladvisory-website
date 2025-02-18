import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function AssessmentViewer() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const isAdmin = user?.role === 'admin';

  return (
    <div className="flex h-screen">
      {/* Navigation Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Assessment</h2>
          {isAdmin && (
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {isEditing ? 'View Mode' : 'Edit Mode'}
            </button>
          )}
        </div>
        
        {/* Navigation content */}
        <div className="p-4">
          {isEditing ? (
            <div className="space-y-4">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded">
                + Add New Section
              </button>
              {/* Editable navigation items */}
            </div>
          ) : (
            <div className="space-y-2">
              {/* Regular navigation items */}
            </div>
          )}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-8">
        {isEditing ? (
          <div className="bg-yellow-50 p-4 mb-4 rounded">
            <p className="text-yellow-800">
              Edit Mode: You can now add, edit, or remove sections.
            </p>
          </div>
        ) : null}
        
        {/* Assessment content */}
      </div>
    </div>
  );
} 