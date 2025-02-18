export interface AssessmentSection {
  id: string;
  title: string;
  path: string;
  parentId: string | null;
  order: number;
  contentPath: string;
  children?: AssessmentSection[];
}

export interface AssessmentContent {
  id: string;
  sectionId: string;
  component: string; // Path to the TSX component
  lastModified: string;
}

export interface AssessmentNavigation {
  sections: AssessmentSection[];
  rootSections: string[]; // IDs of top-level sections
}

export interface AssessmentState {
  currentSectionId: string | null;
  expandedSections: string[];
  isEditing: boolean;
} 