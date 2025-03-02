import { RouteObject } from 'react-router-dom';

import { Layout, Login, MainPage, NotFoundPage } from '@/pages';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '*', element: <NotFoundPage /> },
      { path: '/', element: <MainPage /> }
      // { path: '/pdf-view/:uuid', element: <PDFView /> }
    ]
  },
  { path: '/login', element: <Login /> },
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
