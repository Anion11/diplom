import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { PageLoader, Wrapper } from '@/shared/ui';
import { WidgetFooter, WidgetHeader, WidgetNavbar } from '@/widgets';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user && location.pathname === '/lk') {
      navigate('/lk');
    }
  }, [user]);

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
