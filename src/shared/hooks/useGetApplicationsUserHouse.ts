import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { IApplication } from '../config/interfaces/Application/IApplication';

import { $api } from '@/shared/api/api.ts';

const BATCH_SIZE = 4;

const useGetApplicationsUserHouse = () => {
  const [loading, setLoading] = useState(false);
  const [allApplications, setAllApplications] = useState<IApplication[]>([]);
  const [visibleApplications, setVisibleApplications] = useState<IApplication[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res: AxiosResponse<IApplication[]> = await $api.get('/application-api/house/list');
      setAllApplications(res.data);
      const initialSlice = res.data.slice(0, BATCH_SIZE);
      setVisibleApplications(initialSlice);
      setCurrentIndex(initialSlice.length);
    } catch (error) {
      console.error('Ошибка при получении заявок:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateApplication = (updatedApplication: IApplication) => {
    setAllApplications(prevAll =>
      prevAll.map(application =>
        application.id === updatedApplication.id ? updatedApplication : application
      )
    );

    setVisibleApplications(prevVisible =>
      prevVisible.map(application =>
        application.id === updatedApplication.id ? updatedApplication : application
      )
    );
  };

  const loadMore = () => {
    const nextIndex = currentIndex + BATCH_SIZE;
    const more = allApplications.slice(currentIndex, nextIndex);
    setVisibleApplications(prev => [...prev, ...more]);
    setCurrentIndex(nextIndex);
  };

  const hasMore = currentIndex < allApplications.length;

  useEffect(() => {
    fetchApplications();
  }, []);

  return {
    loading,
    applications: visibleApplications,
    loadMore,
    hasMore,
    allApplications,
    updateApplication,
    fetchApplications
  };
};

export default useGetApplicationsUserHouse;
