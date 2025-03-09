import { RouteObject } from 'react-router-dom';

import { Layout, LoginPage, MainPage, NotFoundPage, RegistrationPage } from '@/pages';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '*', element: <NotFoundPage /> },
      { path: '/', element: <MainPage /> }
    ]
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/registration', element: <RegistrationPage /> }
];

const authRoutes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      ...(routes[0].children as RouteObject[]),
      {
        path: '/lk',
        element: <div>Личный кабинет</div>
      }
    ]
  }
];

export { routes, authRoutes };
