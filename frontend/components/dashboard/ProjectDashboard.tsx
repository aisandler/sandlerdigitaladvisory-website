import { useState } from 'react';
import type { Project, Activity } from '../../types/portal';

interface ProjectDashboardProps {
  projects: Project[];
}

export default function ProjectDashboard({ projects }: ProjectDashboardProps) {
  const [recentActivities] = useState<Activity[]>([]);

  return (
    <div className="space-y-6">
      {/* Project Status Overview */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow p-4 border border-gray-200"
            >
              <h3 className="font-medium text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : project.status === 'completed'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <span className="text-sm text-gray-500">
                  Due: {new Date(project.endDate || '').toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity Feed */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                    <span className="text-xs text-gray-500">
                      {activity.type.replace('_', ' ').charAt(0).toUpperCase() +
                        activity.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {recentActivities.length === 0 && (
            <div className="p-4 text-center text-gray-500">No recent activity</div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project) => (
            project.phases.map((phase) => (
              phase.deliverables.slice(0, 1).map((deliverable) => (
                <a
                  key={deliverable.id}
                  href={deliverable.url}
                  className="block p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium text-gray-900 truncate">{deliverable.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {new Date(deliverable.lastUpdated).toLocaleDateString()}
                  </p>
                </a>
              ))
            ))
          ))}
        </div>
      </section>
    </div>
  );
} 