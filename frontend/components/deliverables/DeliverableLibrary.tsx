import { useState } from 'react';
import type { Project, Deliverable } from '../../types/portal';

interface DeliverableLibraryProps {
  projects: Project[];
}

export default function DeliverableLibrary({ projects }: DeliverableLibraryProps) {
  const [selectedType, setSelectedType] = useState<Deliverable['type'] | 'all'>('all');

  const allDeliverables = projects.flatMap(project =>
    project.phases.flatMap(phase => 
      phase.deliverables.map(deliverable => ({
        ...deliverable,
        projectTitle: project.title,
        phaseTitle: phase.title
      }))
    )
  );

  const filteredDeliverables = selectedType === 'all'
    ? allDeliverables
    : allDeliverables.filter(d => d.type === selectedType);

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Filter by:</span>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as Deliverable['type'] | 'all')}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="all">All Types</option>
          <option value="document">Documents</option>
          <option value="report">Reports</option>
          <option value="application">Applications</option>
        </select>
      </div>

      {/* Deliverables Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredDeliverables.map((deliverable) => (
          <div
            key={deliverable.id}
            className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{deliverable.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {deliverable.projectTitle} - {deliverable.phaseTitle}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  deliverable.status === 'final'
                    ? 'bg-green-100 text-green-800'
                    : deliverable.status === 'review'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {deliverable.status.charAt(0).toUpperCase() + deliverable.status.slice(1)}
              </span>
            </div>
            
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="space-y-1">
                <p className="text-gray-500">
                  Version: {deliverable.version}
                </p>
                <p className="text-gray-500">
                  Last updated: {new Date(deliverable.lastUpdated).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <a
                  href={deliverable.url}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View
                </a>
                {deliverable.googleDriveId && (
                  <a
                    href={`https://drive.google.com/file/d/${deliverable.googleDriveId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Open in Drive
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredDeliverables.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500">No deliverables found</p>
          </div>
        )}
      </div>
    </div>
  );
} 