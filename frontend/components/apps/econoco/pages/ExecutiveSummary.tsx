import React from 'react';

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Digital Marketing Maturity Assessment
        </h2>
        <h3 className="text-lg text-gray-700 mb-6">
          Establishing the foundation for transforming Econoco's digital marketing capabilities in 2025
        </h3>
        
        <div className="prose max-w-none">
          <p>
            The Digital Marketing Maturity Assessment establishes a foundation for transforming
            Econoco's digital marketing capabilities in 2025. Through detailed examination of current
            operations, infrastructure, and partnerships, this assessment identifies vital opportunities
            while setting clear priorities for strategic enhancement.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">15+ Stakeholder Sessions</h3>
              <p className="text-sm text-gray-600">In-depth interviews and working sessions</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">18 Months Performance History</h3>
              <p className="text-sm text-gray-600">Historical data analyzed across channels</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">5 Brands</h3>
              <p className="text-sm text-gray-600">Digital ecosystem assessment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Assessment Overview</h3>
        <p className="text-gray-600">
          Our evaluation spans Econoco's full digital marketing ecosystem, examining operations
          across all major brands and revenue verticals. Through comprehensive stakeholder
          interviews, system audits, and performance analysis, we have developed a clear
          understanding of current capabilities and future requirements.
        </p>
        <p className="text-gray-600 mt-4">
          This systematic evaluation, conducted over four weeks in December 2024, revealed
          significant opportunities for enhancement across multiple dimensions of the digital
          marketing operation.
        </p>
      </div>
    </div>
  );
};

export default ExecutiveSummary; 