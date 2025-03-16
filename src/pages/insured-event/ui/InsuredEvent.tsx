import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './InsuredEvent.module.scss';

const InsuredEvent: FC = () => {
  return (
    <div className={styles.insured}>
      <Outlet />
    </div>
  );
};

export default InsuredEvent;
