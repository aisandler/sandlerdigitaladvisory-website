import { User as FirebaseUser } from 'firebase/auth';

export type UserRole = 'admin' | 'client' | 'manager';

export interface CustomUser extends FirebaseUser {
  role?: UserRole;
}

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  clientGroupId?: string; // For grouped clients
  organizationId: string;
  name: string;
  accessLevel: number;
}

export interface ClientGroup {
  id: string;
  name: string;
  clients: string[];
  managers: string[];
  settings: {
    assessmentTypes: string[];
    features: string[];
    customization: {
      description?: string;
      theme?: string;
      modules?: string[];
      [key: string]: any;
    };
  };
}

// Re-export the CustomUser as User to maintain compatibility
export type User = CustomUser; 