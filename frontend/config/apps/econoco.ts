import { AppConfig } from '../../types/apps';

export const econocoConfig: AppConfig = {
  id: 'econoco',
  name: 'Digital Marketing Strategy',
  clientGroups: ['econoco'],
  theme: {
    primary: '#0066cc',
    secondary: '#004999'
  },
  sections: [
    {
      id: 'project-status',
      title: 'Project Status',
      icon: 'clipboard',
      pages: [
        { 
          id: 'overview',
          title: 'Overview',
          parentSection: 'project-status',
          component: 'ProjectStatusOverview'
        }
      ]
    },
    {
      id: 'marketing-assessment',
      title: 'Digital Marketing Assessment',
      icon: 'chart',
      pages: [
        {
          id: 'executive-summary',
          title: 'Executive Summary',
          parentSection: 'marketing-assessment',
          component: 'ExecutiveSummary'
        },
        {
          id: 'success-criteria',
          title: 'Success Criteria',
          parentSection: 'marketing-assessment',
          component: 'SuccessCriteria'
        },
        {
          id: 'critical-findings',
          title: 'Critical Findings',
          parentSection: 'marketing-assessment',
          component: 'CriticalFindings'
        },
        {
          id: 'key-recommendations',
          title: 'Key Recommendations',
          parentSection: 'marketing-assessment',
          component: 'KeyRecommendations'
        }
      ]
    },
    {
      id: 'analytics-framework',
      title: 'Analytics Framework',
      icon: 'chart-bar',
      pages: [
        {
          id: 'overview',
          title: 'Overview',
          parentSection: 'analytics-framework',
          component: 'AnalyticsOverview'
        }
      ]
    },
    {
      id: 'competitive-landscape',
      title: 'Competitive Landscape',
      icon: 'users',
      pages: [
        {
          id: 'overview',
          title: 'Overview',
          parentSection: 'competitive-landscape',
          component: 'CompetitiveOverview'
        }
      ]
    },
    {
      id: 'digital-strategy',
      title: 'Digital Strategy & Implementation',
      icon: 'cog',
      pages: [
        {
          id: 'overview',
          title: 'Overview',
          parentSection: 'digital-strategy',
          component: 'StrategyOverview'
        }
      ]
    }
  ]
}; 