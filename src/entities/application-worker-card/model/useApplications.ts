import { AxiosError } from 'axios';
import { useState } from 'react';

import { $api } from '@/shared/api/api.ts';
import { EApplicationStatus } from '@/shared/config/enums/EApplicationStatus';

const useApplications = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const accessApplication = async (
    detailsId: number,
    id: number,
    data: {
      finishingCost: number;
      structuralElCost: number;
      neighborsCost: number;
      household: number;
      monthCost: number;
      egrn: string | null;
    }
  ): Promise<void> => {
    try {
      setLoading(true);
      await $api.post(`/application-api/worker/take?detailsId=${detailsId}`).then(res => {
        if (res.data.statusCode) {
          setFormError(res.data.message || 'Ошибка сервера при взятии в работу');
        } else {
          $api
            .post(
              `/application-api/house/process?id=${id}&status=${EApplicationStatus.WAIT_PAYMENT}`,
              data
            )
            .then(res => {
              if (res.data.statusCode) {
                setFormError(res.data.message || 'Ошибка сервера при установке статуса');
              } else {
                setComplete(true);
              }
            });
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

  return { deleteRequest, formError, clearFormError, loading, complete, accessApplication };
};

export default useApplications;
