import { FC } from 'react';

import styles from './WidgetLoginEmail.module.scss';

import { LoginFormEmail } from '@/features';

const WidgetLoginEmail: FC = () => {
  return (
    <div className={styles.login}>
      <LoginFormEmail />
    </div>
  );
};

export default WidgetLoginEmail;
