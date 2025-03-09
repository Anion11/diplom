import { FC } from 'react';

import styles from './style.module.scss';

import { Inner } from '@/shared/ui';

const Main: FC = () => {
  return (
    <>
      <div className={styles.main}>
        <Inner></Inner>
      </div>
    </>
  );
};

export default Main;
