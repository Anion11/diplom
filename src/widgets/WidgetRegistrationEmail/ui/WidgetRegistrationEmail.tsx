import { FC } from 'react';

import styles from './WidgetRegistrationEmail.module.scss';

import { RegistrationFormEmail } from '@/features';

const WidgetRegistrationEmail: FC = () => {
  return (
    <div className={styles.reg}>
      <RegistrationFormEmail />
    </div>
  );
};

export default WidgetRegistrationEmail;
