import { RouteObject } from 'react-router-dom';

import {
  AboutPage,
  ContactsPage,
  FAQPage,
  HomeInsurancePage,
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
          { path: 'kasko', element: <div>каско</div> },
          { path: 'property', element: <InsuredEventHousePage /> },
          { path: 'health', element: <div>здоровье</div> }
        ]
      },
      { path: '/faq', element: <FAQPage /> },
      { path: '/contacts', element: <ContactsPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/kasko', element: <div>Каско</div> },
      { path: '/antipincer-insurance', element: <div>Страхование антиклещ</div> },
      { path: '/apartments-insurance', element: <HomeInsurancePage /> }
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
