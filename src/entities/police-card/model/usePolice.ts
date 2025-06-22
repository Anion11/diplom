import { useState } from 'react';
import { AxiosError } from 'axios';

import { $api } from '@/shared/api/api.ts';

const useApplications = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const deleteRequest = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      await $api.delete(`/application-api/house/delete?id=${id}`);
      setComplete(true); //Проверить на статус код
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

export default useApplications;
