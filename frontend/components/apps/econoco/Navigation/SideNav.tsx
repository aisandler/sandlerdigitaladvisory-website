import React from 'react';
import Link from 'next/link';
import { econocoConfig } from '../../../../config/apps/econoco';

interface SideNavProps {
  currentSection: string;
  currentPage: string;
}

const SideNav: React.FC<SideNavProps> = ({ currentSection, currentPage }) => {
  const section = econocoConfig.sections.find(s => s.id === currentSection);
  
  if (!section) return null;

  return (
    <nav className="w-64 bg-gray-50 min-h-screen p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {section.title}
      </h2>
      <div className="space-y-1">
        {section.pages.map(page => (
          <Link
            key={page.id}
            href={`/client-portal/econoco/${currentSection}/${page.id}`}
            className={`block px-4 py-2 rounded-md text-sm font-medium
              ${currentPage === page.id
                ? 'bg-blue-100 text-blue-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
          >
            {page.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideNav; 