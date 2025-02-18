import { useState } from 'react';
import { db } from '../../../config/firebase';
import { collection, doc, updateDoc, addDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import type { AssessmentSection } from '../../../types/assessment';

interface NavigationEditorProps {
  sections: AssessmentSection[];
  onUpdate: () => void;
}

export default function NavigationEditor({ sections, onUpdate }: NavigationEditorProps) {
  const [editingSection, setEditingSection] = useState<AssessmentSection | null>(null);
  const [newSection, setNewSection] = useState({
    title: '',
    path: '',
    parentId: null as string | null,
    order: 0,
    contentPath: ''
  });

  const handleSectionUpdate = async (section: AssessmentSection) => {
    try {
      const sectionRef = doc(db, 'assessmentSections', section.id);
      await updateDoc(sectionRef, {
        title: section.title,
        path: section.path,
        parentId: section.parentId,
        order: section.order,
        contentPath: section.contentPath
      });
      setEditingSection(null);
      onUpdate();
    } catch (error) {
      console.error('Error updating section:', error);
    }
  };

  const handleAddSection = async () => {
    try {
      await addDoc(collection(db, 'assessmentSections'), {
        ...newSection,
        order: sections.length
      });
      setNewSection({
        title: '',
        path: '',
        parentId: null,
        order: 0,
        contentPath: ''
      });
      onUpdate();
    } catch (error) {
      console.error('Error adding section:', error);
    }
  };

  const handleDeleteSection = async (sectionId: string) => {
    try {
      // Delete the section and update orders
      const batch = writeBatch(db);
      
      // Delete the section
      batch.delete(doc(db, 'assessmentSections', sectionId));
      
      // Update orders of remaining sections
      const remainingSections = sections
        .filter(s => s.id !== sectionId)
        .sort((a, b) => a.order - b.order);
      
      remainingSections.forEach((section, index) => {
        batch.update(doc(db, 'assessmentSections', section.id), {
          order: index
        });
      });

      await batch.commit();
      onUpdate();
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  };

  const handleReorder = async (sectionId: string, direction: 'up' | 'down') => {
    try {
      const currentIndex = sections.findIndex(s => s.id === sectionId);
      if (
        (direction === 'up' && currentIndex === 0) ||
        (direction === 'down' && currentIndex === sections.length - 1)
      ) {
        return;
      }

      const batch = writeBatch(db);
      const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      
      // Swap orders
      batch.update(doc(db, 'assessmentSections', sections[currentIndex].id), {
        order: sections[swapIndex].order
      });
      batch.update(doc(db, 'assessmentSections', sections[swapIndex].id), {
        order: sections[currentIndex].order
      });

      await batch.commit();
      onUpdate();
    } catch (error) {
      console.error('Error reordering sections:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Add New Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={newSection.title}
              onChange={(e) => setNewSection(prev => ({ ...prev, title: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Path</label>
            <input
              type="text"
              value={newSection.path}
              onChange={(e) => setNewSection(prev => ({ ...prev, path: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent Section</label>
            <select
              value={newSection.parentId || ''}
              onChange={(e) => setNewSection(prev => ({ ...prev, parentId: e.target.value || null }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">None (Root Section)</option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content Path</label>
            <input
              type="text"
              value={newSection.contentPath}
              onChange={(e) => setNewSection(prev => ({ ...prev, contentPath: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddSection}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Section
          </button>
        </div>
      </div>

      {/* Section List */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Manage Sections</h3>
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <div className="flex-1">
                <h4 className="font-medium">{section.title}</h4>
                <p className="text-sm text-gray-500">Path: {section.path}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleReorder(section.id, 'up')}
                  className="p-1 text-gray-400 hover:text-gray-600"
                  disabled={section.order === 0}
                >
                  ↑
                </button>
                <button
                  onClick={() => handleReorder(section.id, 'down')}
                  className="p-1 text-gray-400 hover:text-gray-600"
                  disabled={section.order === sections.length - 1}
                >
                  ↓
                </button>
                <button
                  onClick={() => setEditingSection(section)}
                  className="p-1 text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteSection(section.id)}
                  className="p-1 text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Edit Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={editingSection.title}
                  onChange={(e) => setEditingSection(prev => ({ ...prev!, title: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Path</label>
                <input
                  type="text"
                  value={editingSection.path}
                  onChange={(e) => setEditingSection(prev => ({ ...prev!, path: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content Path</label>
                <input
                  type="text"
                  value={editingSection.contentPath}
                  onChange={(e) => setEditingSection(prev => ({ ...prev!, contentPath: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setEditingSection(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSectionUpdate(editingSection)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 