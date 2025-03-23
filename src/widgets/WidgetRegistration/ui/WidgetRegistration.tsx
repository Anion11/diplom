import { FC } from 'react';

import styles from './WidgetRegistration.module.scss';

import { RegistrationForm } from '@/features';

const WidgetRegistration: FC = () => {
  return (
    <div className={styles.reg}>
      <RegistrationForm />
    </div>
  );
};

export default WidgetRegistration;
