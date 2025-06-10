import { RouteObject } from 'react-router-dom';

import {
  AboutPage,
  ContactsPage,
  FAQPage,
  InsuredEventHousePage,
  InsuredEventPage,
  InsuredEventParentPage,
  Layout,
  LoginPage,
  MainPage,
  NotFoundPage,
  PersonalAccountPage,
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
          { path: 'property', element: <InsuredEventHousePage /> },
          { path: 'health', element: <div>здоровье</div> }
        ]
      },
      { path: '/faq', element: <FAQPage /> },
      { path: '/contacts', element: <ContactsPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/kasko', element: <div>Каско</div> },
      { path: '/osago', element: <div>Осаго</div> },
      { path: '/accident-insurance', element: <div>Страхование от несчастных случаев</div> },
      { path: '/apartments-insurance', element: <div>Страхование квартир</div> },
      { path: '/houses-insurance', element: <div>Страхование домов</div> }
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
        element: <PersonalAccountPage />
      }
    ]
  }
];

export { routes, authRoutes };
