import { AxiosError } from 'axios';
import { useState } from 'react';

import { $api } from '@/shared/api/api.ts';

const useApplications = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(null);

  const handlePayment = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      $api.get(`/application-api/payment/link?id=${id}`).then(res => {
        if (res.data.statusCode) {
          setFormError(res.data.message || 'Ошибка сервера');
        } else {
          window.location.href = res.data.url;
        }
      });
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

  const deleteRequest = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      await $api.delete(`/application-api/house/delete?id=${id}`).then(res => {
        if (res.data.statusCode || res.data === false) {
          setComplete(false);
        } else {
          setComplete(true);
        }
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        setFormError(error.message || 'Ошибка сервера');
      } else {
        setFormError('Произошла ошибка при изменении данных');
      }
      setComplete(false);
    } finally {
      setLoading(false);
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { deleteRequest, formError, clearFormError, loading, complete, handlePayment };
};

export default useApplications;
