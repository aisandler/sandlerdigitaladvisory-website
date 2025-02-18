import React from 'react';
import TopNav from '../Navigation/TopNav';
import SideNav from '../Navigation/SideNav';

interface AppLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  currentPage: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  currentSection,
  currentPage,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopNav currentSection={currentSection} />
      
      <div className="flex">
        <SideNav
          currentSection={currentSection}
          currentPage={currentPage}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout; 