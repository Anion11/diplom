import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import { IDashboardProfileForm } from '@/features/dashboard-profile/model/IDashboardProfileForm';
import { $api } from '@/shared/api/api.ts';
import { IResponseError } from '@/shared/config/interfaces/ResponseError/IResponseError';
import { IUpdateProfileOutput } from '@/shared/config/interfaces/UpdateProfile/IUpdateProfileOutput';

const useDashboardProfileAddDocumentForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const updateRequest = async (data: IDashboardProfileForm): Promise<void> => {
    try {
      setComplete(false);
      setLoading(true);
      const resReg: AxiosResponse<IUpdateProfileOutput | IResponseError> = await $api.put(
        '/api/user/me/update',
        {
          ...data
        }
      );

      if ('statusCode' in resReg.data) {
        setFormError(
          resReg.data.message || 'Пользователь с таким логином или номером телефона уже существует'
        );
      }

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

  return { updateRequest, formError, clearFormError, loading, complete };
};

export default useDashboardProfileAddDocumentForm;
