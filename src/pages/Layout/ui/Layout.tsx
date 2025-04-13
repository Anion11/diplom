import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { PageLoader, Wrapper } from '@/shared/ui';
import { WidgetFooter, WidgetHeader, WidgetNavbar } from '@/widgets';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Wrapper>
        <WidgetHeader />
        <main>
          <Outlet />
        </main>
        <WidgetFooter />
        <WidgetNavbar />
      </Wrapper>
    </Suspense>
  );
};

export default Layout;
