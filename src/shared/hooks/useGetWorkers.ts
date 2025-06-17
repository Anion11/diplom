import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import ERoles from '../config/enums/ERoles';
import { IWorker } from '../config/interfaces/Worker/IWorker';

import { $api } from '@/shared/api/api.ts';

const BATCH_SIZE = 4;

const useGetWorkers = () => {
  const [loading, setLoading] = useState(false);
  const [allWorkers, setAllWorkers] = useState<IWorker[]>([]);
  const [visibleWorkers, setVisibleWorkers] = useState<IWorker[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchWorkers = async () => {
    setLoading(true);
    try {
      const res: AxiosResponse<IWorker[]> = await $api.get(
        '/auth-api/admin-api/list?page=0&size=64342146'
      );
      console.log(res.data);
      const filtered = res.data.filter(worker => worker.roles?.[0]?.role === ERoles.WORKER);
      setAllWorkers(filtered);
      const initialSlice = filtered.slice(0, BATCH_SIZE);
      setVisibleWorkers(initialSlice);
      setCurrentIndex(initialSlice.length);
    } catch (error) {
      console.error('Ошибка при получении сотрудников:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextIndex = currentIndex + BATCH_SIZE;
    const more = allWorkers.slice(currentIndex, nextIndex);
    setVisibleWorkers(prev => [...prev, ...more]);
    setCurrentIndex(nextIndex);
  };

  const hasMore = currentIndex < allWorkers.length;

  useEffect(() => {
    fetchWorkers();
  }, []);

  return {
    loading,
    workers: visibleWorkers,
    loadMore,
    hasMore
  };
};

export default useGetWorkers;
