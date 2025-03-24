import { ReactElement, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.scss';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import useInterceptor from '@/app/config/hooks/useInterceptor.ts';
import { authRoutes, routes } from '@/app/routes';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';

const App = (): ReactElement => {
  useInterceptor();

  const { user } = useAuthContext();
  const routesMap = useMemo(() => (user ? authRoutes : routes), [user]);
  const router = createBrowserRouter(routesMap);

  return <RouterProvider router={router} />;
};

export default App;
