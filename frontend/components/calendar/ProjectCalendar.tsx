import { useState, useEffect } from 'react';
import type { Project, CalendarEvent } from '../../types/portal';

interface ProjectCalendarProps {
  projects: Project[];
}

export default function ProjectCalendar({ projects }: ProjectCalendarProps) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedView, setSelectedView] = useState<'calendar' | 'timeline'>('calendar');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement Google Calendar API integration
    // For now, we'll generate some sample events from project milestones
    const projectEvents: CalendarEvent[] = projects.flatMap(project => [
      {
        id: `start-${project.id}`,
        title: `${project.title} Start`,
        startTime: project.startDate,
        endTime: project.startDate,
        type: 'milestone' as const,
        description: `Project start: ${project.title}`
      },
      ...(project.endDate ? [{
        id: `end-${project.id}`,
        title: `${project.title} Due`,
        startTime: project.endDate,
        endTime: project.endDate,
        type: 'deadline' as const,
        description: `Project deadline: ${project.title}`
      }] : [])
    ]);

    setEvents(projectEvents);
    setIsLoading(false);
  }, [projects]);

  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Project Timeline</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedView('calendar')}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              selectedView === 'calendar'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Calendar
          </button>
          <button
            onClick={() => setSelectedView('timeline')}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              selectedView === 'timeline'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Timeline
          </button>
        </div>
      </div>

      {selectedView === 'calendar' ? (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid gap-4">
            {sortedEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  {event.description && (
                    <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    {new Date(event.startTime).toLocaleDateString()} {' '}
                    {new Date(event.startTime).toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    event.type === 'meeting'
                      ? 'bg-blue-100 text-blue-800'
                      : event.type === 'milestone'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-8 relative">
              {sortedEvents.map((event, index) => (
                <div key={event.id} className="relative pl-8">
                  <div className="absolute left-3 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-600"></div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    {event.description && (
                      <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      {new Date(event.startTime).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 