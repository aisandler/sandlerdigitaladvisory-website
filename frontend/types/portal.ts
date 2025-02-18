export type UserRole = 'admin' | 'client';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  googleWorkspaceId?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  startDate: string;
  endDate?: string;
  phases: ProjectPhase[];
  clientId: string;
}

export interface ProjectPhase {
  id: string;
  title: string;
  status: 'not-started' | 'in-progress' | 'completed';
  startDate: string;
  endDate: string;
  deliverables: Deliverable[];
}

export interface Deliverable {
  id: string;
  title: string;
  type: 'document' | 'report' | 'application';
  status: 'draft' | 'review' | 'final';
  version: string;
  lastUpdated: string;
  url: string;
  fileType?: string;
  googleDriveId?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  description?: string;
  googleCalendarId?: string;
  type: 'meeting' | 'milestone' | 'deadline';
}

export interface Activity {
  id: string;
  type: 'deliverable_update' | 'meeting_scheduled' | 'phase_completed';
  timestamp: string;
  description: string;
  projectId: string;
  userId: string;
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: string;
  googleDriveId?: string;
  path: string;
  projectId: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
  documents?: {
    id: string;
    name: string;
    url: string;
    uploadedAt: string;
  }[];
  notes?: {
    id: string;
    content: string;
    createdAt: string;
    createdBy: string;
  }[];
} 