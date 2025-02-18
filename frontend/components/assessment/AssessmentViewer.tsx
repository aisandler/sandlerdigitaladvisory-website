import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import type { AssessmentSection, AssessmentState } from '../../types/assessment';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import LoadingSpinner from '../LoadingSpinner';
import NavigationEditor from './admin/NavigationEditor';

interface AssessmentViewerProps {
  isAdmin?: boolean;
}

export default function AssessmentViewer({ isAdmin = false }: AssessmentViewerProps) {
  const [sections, setSections] = useState<AssessmentSection[]>([]);
  const [state, setState] = useState<AssessmentState>({
    currentSectionId: null,
    expandedSections: [],
    isEditing: false
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { user, signOut } = useAuth();

  const refreshSections = async () => {
    try {
      const sectionsQuery = query(
        collection(db, 'assessmentSections'),
        orderBy('order')
      );
      const snapshot = await getDocs(sectionsQuery);
      const sectionsData = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as AssessmentSection[];
      
      setSections(sectionsData);
    } catch (error) {
      console.error('Error fetching assessment sections:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshSections();
  }, []);

  const toggleSection = (sectionId: string) => {
    setState(prev => ({
      ...prev,
      expandedSections: prev.expandedSections.includes(sectionId)
        ? prev.expandedSections.filter(id => id !== sectionId)
        : [...prev.expandedSections, sectionId]
    }));
  };

  const navigateToSection = (section: AssessmentSection) => {
    setState(prev => ({ ...prev, currentSectionId: section.id }));
    router.push(`/assessment/${section.path}`);
  };

  const toggleEditMode = () => {
    setState(prev => ({ ...prev, isEditing: !prev.isEditing }));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Navigation Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Assessment Report</h2>
            <div className="flex items-center space-x-2">
              {isAdmin && (
                <button
                  onClick={toggleEditMode}
                  className="px-3 py-1 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  {state.isEditing ? 'Done' : 'Edit Navigation'}
                </button>
              )}
              <button
                onClick={signOut}
                className="px-3 py-1 text-sm font-medium rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
        
        {state.isEditing && isAdmin ? (
          <div className="flex-1 overflow-auto">
            <NavigationEditor 
              sections={sections}
              onUpdate={refreshSections}
            />
          </div>
        ) : (
          <nav className="p-4 flex-1 overflow-auto">
            {sections.map((section) => (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() => section.children ? toggleSection(section.id) : navigateToSection(section)}
                  className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${
                    state.currentSectionId === section.id ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  <span className="flex items-center">
                    {section.children && (
                      <span className="mr-2">
                        {state.expandedSections.includes(section.id) ? '▼' : '▶'}
                      </span>
                    )}
                    {section.title}
                  </span>
                </button>
                {section.children && state.expandedSections.includes(section.id) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {section.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => navigateToSection(child)}
                        className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${
                          state.currentSectionId === child.id ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                      >
                        {child.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto py-8 px-4">
          {state.isEditing && isAdmin ? (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Navigation Editor Mode</h2>
              <p className="text-gray-600">
                Use the sidebar to manage the assessment navigation structure. Click "Done" when finished.
              </p>
            </div>
          ) : state.currentSectionId ? (
            <div className="bg-white shadow-lg rounded-lg p-6">
              {/* Content will be dynamically imported based on section */}
              {/* We'll implement this next */}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Select a section from the navigation menu
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 