import { ReactElement, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { authRoutes, routes } from './config/router/routes.tsx';

import './styles/index.scss';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import useInterceptor from '@/app/config/hooks/useInterceptor.ts';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';

const App = (): ReactElement => {
  const { user } = useAuthContext();
  const routesMap = useMemo(() => (user ? authRoutes : routes), [user]);
  const router = createBrowserRouter(routesMap);
  useInterceptor();
  return <RouterProvider router={router} />;
};

export default App;
