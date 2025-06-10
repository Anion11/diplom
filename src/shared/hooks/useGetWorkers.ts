import { useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/api.ts';

const useGetWorkers = () => {
  const [loading, setLoading] = useState(true);

  const getWorkers = async () => {
    const resWorkers: AxiosResponse = await $api.get('/admin-api/list?page=47896901&size=47896901');
    console.log(resWorkers);
    setLoading(false);
  };

  return { loading, getWorkers };
};

export default useGetWorkers;
