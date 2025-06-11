import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Layout.module.scss';

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
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className={styles.toast}
        />
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
