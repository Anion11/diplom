import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Inner, Section, SideTabs } from '@/shared/ui';
import {
  WidgetDashboardDocuments,
  WidgetDashboardProfile,
  WidgetGetWorkers,
  WidgetRegistrationWorker
} from '@/widgets';

const AdminDashboard: FC = () => {
  const navigate = useNavigate();

  const { logout } = useAuthContext();

  const tabs = [
    {
      label: 'Профиль',
      content: <WidgetDashboardProfile />
    },
    {
      label: 'Документы',
      content: <WidgetDashboardDocuments />
    },
    {
      label: 'Сотрудники',
      content: <WidgetGetWorkers />
    },
    {
      label: 'Добавить сотрудника',
      content: <WidgetRegistrationWorker />
    },
    {
      label: 'Выход',
      mods: 'exit',
      onClick: () => {
        if (logout) logout();
        navigate('/');
      }
    }
  ];

  return (
    <Section>
      <Inner>
        <SideTabs tabs={tabs} />
      </Inner>
    </Section>
  );
};

export default AdminDashboard;
