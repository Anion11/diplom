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
  const [search, setSearch] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const fetchWorkers = async () => {
    setLoading(true);
    try {
      const res: AxiosResponse<IWorker[]> = await $api.get(
        '/auth-api/admin-api/list?page=0&size=64342146'
      );
      const filtered = res.data.filter(
        worker => worker.roles?.[0]?.role === ERoles.WORKER && !worker.blocked
      );
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

  const updateWorker = (updatedWorker: IWorker) => {
    setAllWorkers(prevAll =>
      prevAll.map(worker => (worker.id === updatedWorker.id ? updatedWorker : worker))
    );

    setVisibleWorkers(prevVisible =>
      prevVisible.map(worker => (worker.id === updatedWorker.id ? updatedWorker : worker))
    );
  };

  const loadMore = () => {
    const nextIndex = currentIndex + BATCH_SIZE;
    const more = allWorkers.slice(currentIndex, nextIndex);
    setVisibleWorkers(prev => [...prev, ...more]);
    setCurrentIndex(nextIndex);
  };

  const hasMore = !isSearchActive && currentIndex < allWorkers.length;

  const handleChange = (value: string) => {
    setSearch(value);
  };

  const searchWorkers = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = allWorkers.filter(worker =>
      [worker.email, worker.phone].join(' ').toLowerCase().includes(lowerQuery)
    );

    setIsSearchActive(true);
    setVisibleWorkers(filtered);
    setCurrentIndex(filtered.length);
  };

  const clearSearch = () => {
    setSearch('');
    setIsSearchActive(false);
    const initialSlice = allWorkers.slice(0, BATCH_SIZE);
    setVisibleWorkers(initialSlice);
    setCurrentIndex(initialSlice.length);
  };

  useEffect(() => {
    if (search.trim() === '') {
      clearSearch();
    }
  }, [search]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  return {
    loading,
    workers: visibleWorkers,
    loadMore,
    hasMore,
    allWorkers,
    handleChange,
    clearSearch,
    search,
    searchWorkers,
    updateWorker,
    fetchWorkers
  };
};

export default useGetWorkers;
