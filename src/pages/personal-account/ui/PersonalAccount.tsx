import { FC } from 'react';

import AdminDashboard from './AdminDashboard/ui/AdminDashboard';
import UserDashboard from './UserDashboard/ui/UserDashboard';
import WorkerDashboard from './WorkerDashboard/ui/WorkerDashboard';

import styles from './PersonalAccount.module.scss';

import ERoles from '@/shared/config/enums/ERoles';
import { useAuthContext } from '@/shared/hooks/useAuthContext';

const PersonalAccount: FC = () => {
  const { user } = useAuthContext();

  const hasRole = (role: ERoles): boolean => {
    return user?.roles?.some(userRole => userRole.name === role) ?? false;
  };

  const renderContentByRole = () => {
    if (hasRole(ERoles.ADMIN)) {
      return <AdminDashboard />;
    }
    if (hasRole(ERoles.WORKER)) {
      return <WorkerDashboard />;
    }
    return <UserDashboard />;
  };

  return <div className={styles.container}>{renderContentByRole()}</div>;
};

export default PersonalAccount;
