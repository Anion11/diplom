import { useState } from 'react';
import { AxiosError } from 'axios';

import { $api } from '@/shared/api/api.ts';

const useUsers = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const deleteRequest = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      await $api.get(`/auth-api/admin-api/block?id=${id}`);
      setComplete(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        setFormError(error.message || 'Ошибка сервера');
      } else {
        setFormError('Произошла ошибка при изменении данных');
      }
    } finally {
      setLoading(false);
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { deleteRequest, formError, clearFormError, loading, complete };
};

export default useUsers;
