import { RouteObject } from 'react-router-dom';

import { Layout, LoginPage, MainPage, NotFoundPage } from '@/pages';

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
  { path: '/reg', element: <div>Форма регистрации</div> }
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
