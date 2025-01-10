export interface Assessment {
  title: string;
  path: string;
  sections: {
    title: string;
    status: 'completed' | 'in-progress' | 'not-started';
    lastEdited?: string;
  }[];
}

export interface ClientData {
  email: string;
  assessments: Assessment[];
  recentActivity: {
    title: string;
    timestamp: string;
    type: 'edit' | 'view' | 'comment';
  }[];
  meetings: {
    date: string;
    time: string;
    title: string;
    description: string;
  }[];
} 