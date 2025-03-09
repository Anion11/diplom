import { FC } from 'react';

import styles from './WidgetRegistrationPhone.module.scss';

import { RegistrationFormPhone } from '@/features';

const WidgetRegistrationPhone: FC = () => {
  return (
    <div className={styles.reg}>
      <RegistrationFormPhone />
    </div>
  );
};

export default WidgetRegistrationPhone;
