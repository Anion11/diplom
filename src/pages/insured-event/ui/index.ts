import { lazy } from 'react';

const InsuredEventPage = lazy(() => import('./InsuredEvent'));
const InsuredEventParentPage = lazy(
  () => import('./InsuredEventParentPage/InsuredEventParentPage')
);
const InsuredEventHousePage = lazy(() => import('./InsuredEventHousePage/InsuredEventHousePage'));

export { InsuredEventPage, InsuredEventParentPage, InsuredEventHousePage };
