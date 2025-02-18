import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { econocoConfig } from '../../../../config/apps/econoco';
import AppLayout from '../../../../components/apps/econoco/Layout/AppLayout';
import LoadingSpinner from '../../../../components/shared/LoadingSpinner';

const AppPage = () => {
  const router = useRouter();
  const { appId, section, page } = router.query;

  // Redirect to first page if no page is specified
  useEffect(() => {
    if (appId && section && !page) {
      const appConfig = econocoConfig; // In the future, we'll look this up based on appId
      const currentSection = appConfig.sections.find(s => s.id === section);
      if (currentSection?.pages[0]) {
        router.replace(`/client-portal/${appId}/${section}/${currentSection.pages[0].id}`);
      }
    }
  }, [appId, section, page, router]);

  if (!appId || !section || !page || typeof appId !== 'string' || 
      typeof section !== 'string' || typeof page !== 'string') {
    return <LoadingSpinner />;
  }

  // For now, we're only handling the Econoco app
  if (appId !== 'econoco') {
    return <div>App not found</div>;
  }

  const currentSection = econocoConfig.sections.find(s => s.id === section);
  const currentPage = currentSection?.pages.find(p => p.id === page);

  if (!currentSection || !currentPage) {
    return <div>Page not found</div>;
  }

  // Dynamically import the page component
  const PageComponent = dynamic(
    () => import(`../../../../components/apps/econoco/pages/${currentPage.component}`),
    {
      loading: () => <LoadingSpinner />,
      ssr: false, // Disable server-side rendering for dynamic imports
    }
  );

  return (
    <AppLayout
      currentSection={section}
      currentPage={page}
    >
      <PageComponent />
    </AppLayout>
  );
};

export default AppPage; 