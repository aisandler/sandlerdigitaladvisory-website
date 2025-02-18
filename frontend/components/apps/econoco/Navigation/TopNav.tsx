import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '../../../shared/Icon';
import { econocoConfig } from '../../../../config/apps/econoco';

interface TopNavProps {
  currentSection: string;
}

const TopNav: React.FC<TopNavProps> = ({ currentSection }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="/econoco-logo.png"
              alt="Econoco"
            />
            <h1 className="ml-4 text-xl font-semibold text-gray-900">
              Digital Marketing Strategy
            </h1>
          </div>
          
          <div className="flex space-x-4">
            {econocoConfig.sections.map(section => (
              <Link
                key={section.id}
                href={`/client-portal/econoco/${section.id}`}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium
                  ${currentSection === section.id 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                <Icon name={section.icon as any} className="w-5 h-5" />
                <span>{section.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav; 