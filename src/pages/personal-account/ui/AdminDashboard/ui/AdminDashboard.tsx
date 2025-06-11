import { FC, useState } from 'react';
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

  const searchParams = new URLSearchParams(location.search);
  const tabFromUrl = parseInt(searchParams.get('tab') || '0', 10);

  const [activeTab, setActiveTab] = useState<number>(tabFromUrl);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    const params = new URLSearchParams(location.search);
    params.set('tab', index.toString());
    navigate({ search: params.toString() }, { replace: true });
  };

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
        <SideTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </Inner>
    </Section>
  );
};

export default AdminDashboard;
