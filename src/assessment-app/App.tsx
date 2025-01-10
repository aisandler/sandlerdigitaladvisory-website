import React from 'react';
import type { User } from 'firebase/auth';
import AssessmentLayout from './src/components/assessment/AssessmentLayout';

interface AssessmentAppProps {
  user: User;
}

const AssessmentApp: React.FC<AssessmentAppProps> = ({ user }) => {
  return <AssessmentLayout />;
};

export default AssessmentApp; 