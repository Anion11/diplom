import { useState } from 'react';
import { AxiosError } from 'axios';

import { $api } from '@/shared/api/api.ts';

const useDocuments = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const approveRequest = async (id: number, isApproved: boolean): Promise<void> => {
    try {
      setLoading(true);
      await $api.post(`/auth-api/user/docs/approve`, { id, isApproved });
      setComplete(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        setFormError(error.message || 'Ошибка сервера');
      } else {
        setFormError('Произошла ошибка при верификации документа');
      }
    } finally {
      setLoading(false);
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { approveRequest, formError, clearFormError, loading, complete };
};

export default useDocuments;
