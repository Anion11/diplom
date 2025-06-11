import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import ERoles from '../config/enums/ERoles';
import { IWorker } from '../config/interfaces/Worker/IWorker';

import { $api } from '@/shared/api/api.ts';

const useGetWorkers = () => {
  const [loading, setLoading] = useState(false);
  const [workers, setWorkers] = useState<IWorker[]>([]);
  const [workersAll, setWorkersAll] = useState<IWorker[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const getWorkers = (size: number = 6) => {
    setLoading(true);

    try {
      const start = page * size;
      const end = start + size;

      const newWorkers = workersAll.slice(start, end);

      setWorkers(prev => [...prev, ...newWorkers]);
      setPage(prevPage => prevPage + 1);

      if (end >= workersAll.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Ошибка при подгрузке сотрудников:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const getAllWorkers = async () => {
    try {
      setLoading(true);
      const res: AxiosResponse<IWorker[]> = await $api.get(`/admin-api/list?page=0&size=999999`);
      const workers = res.data.filter(worker => worker.roles[0].role === ERoles.WORKER);
      setWorkersAll(workers);
    } catch (error) {
      console.error('Ошибка при получении общего количества сотрудников:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllWorkers();
    getWorkers();
  }, []);

  return { loading, workers, getWorkers, getAllWorkers, hasMore };
};

export default useGetWorkers;
