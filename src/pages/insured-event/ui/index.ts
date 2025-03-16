import { lazy } from 'react';

const InsuredEventPage = lazy(() => import('./InsuredEvent'));
const InsuredEventParentPage = lazy(
  () => import('./InsuredEventParentPage/InsuredEventParentPage')
);

export { InsuredEventPage, InsuredEventParentPage };
