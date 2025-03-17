import { RouteObject } from 'react-router-dom';

import {
  AboutPage,
  ContactsPage,
  FAQPage,
  InsuredEventPage,
  InsuredEventParentPage,
  Layout,
  LoginPage,
  MainPage,
  NotFoundPage,
  RegistrationPage
} from '@/pages';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '*', element: <NotFoundPage /> },
      { path: '/', element: <MainPage /> },
      {
        path: '/insured-event',
        element: <InsuredEventPage />,
        children: [
          { index: true, element: <InsuredEventParentPage /> },
          { path: 'osago', element: <div>осаго</div> },
          { path: 'kasko', element: <div>каско</div> },
          { path: 'property', element: <div>квартира и дом</div> },
          { path: 'health', element: <div>здоровье</div> }
        ]
      },
      { path: '/faq', element: <FAQPage /> },
      { path: '/contacts', element: <ContactsPage /> },
      { path: '/about', element: <AboutPage /> }
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
