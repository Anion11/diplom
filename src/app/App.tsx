import { ReactElement, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { authRoutes, routes } from './routes';

import './styles/index.scss';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import useInterceptor from '@/app/config/hooks/useInterceptor.ts';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';
import { PageLoader } from '@/shared/ui';

const App = (): ReactElement => {
  useInterceptor();

  const { loading, user } = useAuthContext();
  const routesMap = useMemo(() => (user ? authRoutes : routes), [user]);
  const router = createBrowserRouter(routesMap);

  if (loading) return <PageLoader />;

  return <RouterProvider router={router} />;
};

export default App;
