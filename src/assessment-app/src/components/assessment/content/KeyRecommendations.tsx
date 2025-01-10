import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, AlertCircle, ShoppingCart, Database, Building2, Users } from 'lucide-react';
import RichTextEditor from '../../../components/common/RichTextEditor';

interface KeyRecommendationsProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  showNavigation?: boolean;
}

const StatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'CRITICAL':
        return {
          bg: 'bg-red-100',
          text: 'text-red-800',
          icon: AlertTriangle
        };
      case 'HIGH PRIORITY':
        return {
          bg: 'bg-amber-100',
          text: 'text-amber-800',
          icon: AlertCircle
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          icon: AlertCircle
        };
    }
  };

  const styles = getStatusStyles();
  const Icon = styles.icon;

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${styles.bg} ${styles.text} text-sm font-semibold`}>
      <Icon size={16} />
      <span>{status}</span>
    </div>
  );
};

const TextSection: React.FC<{ content: string; className?: string }> = ({ content, className = "" }) => (
  <div className={className}>{content}</div>
);

function KeyRecommendationsComponent({ 
  activeTab,
  onTabChange,
  showNavigation = false
}) {
  const tabs = [
    { id: 'overview', title: 'Assessment Overview' },
    { id: 'project-snapshot', title: 'Project Snapshot' },
    { id: 'success-criteria', title: 'Success Criteria' },
    { id: 'findings', title: 'Critical Findings' },
    { id: 'recommendations', title: 'Key Recommendations' }
  ];

  const handleTabChange = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  // Render different content based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Assessment Overview</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Overview content */}
            </CardContent>
          </Card>
        );
      case 'findings':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Critical Findings</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Findings content */}
            </CardContent>
          </Card>
        );
      case 'recommendations':
      default:
        return (
          <div className="space-y-6">
            <Card className="border-t-4 border-t-blue-600">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <TextSection 
                  content="Key Recommendations"
                  className="text-2xl !p-0"
                />
                <TextSection 
                  content="Establishing the foundation for digital marketing transformation"
                  className="text-lg text-gray-600 italic mt-2 !p-0"
                />
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Agency Partnership Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <TextSection 
                        content="Agency Partnership Optimization"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="CRITICAL" />
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <TextSection 
                      content="Our assessment revealed significant concerns with current agency relationships that require immediate action. Primary focus must be placed on evaluating and enhancing these partnerships to establish proper foundations for future growth."
                      className="!p-0"
                    />
                    <TextSection 
                      content="Current agency costs significantly exceed industry standards while delivering limited strategic value. Media management fees at 57% versus industry standard of 12-20% demand immediate review. The upcoming AWG meetings present a critical opportunity to address both operational concerns and strategic alignment."
                      className="!p-0"
                    />
                    <TextSection 
                      content="Immediate actions include preparing comprehensive evaluation criteria for the January 14/16 meetings, documenting current service requirements, and developing transition planning frameworks that ensure business continuity. This includes assessing specialized agency options while evaluating internal capability building needs."
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Marketplace Strategy Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="h-6 w-6 text-blue-600" />
                      <TextSection 
                        content="Marketplace Strategy Development"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="CRITICAL" />
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <TextSection 
                      content="Amazon operations require strategic enhancement to address outdated partnership agreements and missed revenue opportunities. Current content development constraints and buy box competition indicate need for systematic optimization approach."
                      className="!p-0"
                    />
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <TextSection 
                        content="Develop comprehensive Amazon growth strategy focusing on:"
                        className="font-medium !p-0"
                      />
                      <ul className="space-y-2">
                        {[
                          'Evaluation of Knoza partnership and fee structures',
                          'Creation of systematic content development framework',
                          'Clear strategy for 1P versus 3P relationships',
                          'Optimization of catalog management processes',
                          'Enhanced competitive positioning'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600" />
                            <TextSection 
                              content={item}
                              className="!p-0 flex-1"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <TextSection 
                      content="Home Depot presents immediate growth opportunity through improved marketing program utilization and strategic product expansion. Current $14k YTD spend indicates significant underutilization of available opportunities."
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Digital Infrastructure Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Database className="h-6 w-6 text-blue-600" />
                      <TextSection 
                        content="Digital Infrastructure Enhancement"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="HIGH PRIORITY" />
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <TextSection 
                      content="Data quality and measurement capabilities require immediate attention to support strategic decision-making. Implementation of proper analytics filtering must address current 20-25% bot traffic affecting reporting accuracy."
                      className="!p-0"
                    />
                    <TextSection 
                      content="Current marketing automation platform (Pardot) requires evaluation for potential replacement. Begin preliminary vendor assessment while establishing enhanced tracking protocols across digital properties to ensure accurate performance measurement."
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Brand Architecture Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-blue-600" />
                      <TextSection 
                        content="Brand Architecture Optimization"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="HIGH PRIORITY" />
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <TextSection 
                      content="Current brand structure presents opportunities for enhanced market positioning and operational efficiency. Evaluate potential consolidation of Mondo and Sellutions to strengthen premium positioning while optimizing resources."
                      className="!p-0"
                    />
                    <TextSection 
                      content="Develop clear differentiation strategy between Econoco and F&D to reduce channel overlap while maintaining market coverage. Integration with trade show presence and digital activation strategies should inform brand architecture decisions."
                      className="!p-0"
                    />
                  </div>
                </div>

                {/* Organizational Capability Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <TextSection 
                        content="Organizational Capability Development"
                        className="text-xl font-semibold !p-0"
                      />
                    </div>
                    <StatusBadge status="HIGH PRIORITY" />
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <TextSection 
                      content="Integration of trade show marketing (23 shows planned for 2025) with digital capabilities presents significant opportunity. Establish systematic processes for:"
                      className="!p-0"
                    />
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <ul className="space-y-2">
                        {[
                          'Pre-show digital promotion and engagement',
                          'Content creation and distribution workflows',
                          'Lead capture and digital nurture programs',
                          'Social media coordination and content strategy',
                          'Cross-channel performance measurement'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600" />
                            <TextSection 
                              content={item}
                              className="!p-0 flex-1"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <TextSection 
                      content="Document clear ownership of digital initiatives across revenue verticals while developing resource allocation framework that balances ongoing operations with intensive trade show support requirements."
                      className="!p-0"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {showNavigation && (
        <div className="border-b">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>
      )}

      {renderTabContent()}
    </div>
  );
}

export const metadata = {
  title: 'Key Recommendations',
  icon: AlertCircle,
  order: 2
};

export default KeyRecommendationsComponent;