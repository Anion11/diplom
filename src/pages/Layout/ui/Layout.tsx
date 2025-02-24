import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loading from '@/shared/Loading/ui/Loading.tsx';
import { Wrapper } from '@/shared/ui';
import { Footer, Header } from '@/widgets';

const Layout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Wrapper>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Wrapper>
    </Suspense>
  );
};

export default Layout;
