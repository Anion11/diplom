import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import { IDashboardEditPasswordForm } from './IDashboardEditPasswordForm';

import { $api } from '@/shared/api/api.ts';
import { IResponseError } from '@/shared/config/interfaces/ResponseError/IResponseError';
import { IUpdateProfileOutput } from '@/shared/config/interfaces/UpdateProfile/IUpdateProfileOutput';

const useDashboardEditPassword = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const updateRequest = async (
    data: Omit<IDashboardEditPasswordForm, 'passwordRepeat'>
  ): Promise<void> => {
    try {
      setComplete(false);
      setLoading(true);
      const resReg: AxiosResponse<IUpdateProfileOutput | IResponseError> = await $api.put(
        '/auth-api/user/me/update',
        {
          ...data
        }
      );

      if ('statusCode' in resReg.data) {
        setFormError(resReg.data.message);
      } else {
        setComplete(true);
      }
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

export default useDashboardEditPassword;
