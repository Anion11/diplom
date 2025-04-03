import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader, Wrapper } from '@/shared/ui';
import { WidgetFooter, WidgetHeader, WidgetNavbar } from '@/widgets';

const Layout = () => {
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
