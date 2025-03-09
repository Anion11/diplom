import { FC } from 'react';

import styles from './WidgetLoginPhone.module.scss';

import { LoginFormPhone } from '@/features';

const WidgetLoginPhone: FC = () => {
  return (
    <div className={styles.login}>
      <LoginFormPhone />
    </div>
  );
};

export default WidgetLoginPhone;
