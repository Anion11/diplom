import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import { IRegistrationWorkerForm } from './IRegistrationWorkerForm';

import { $api } from '@/shared/api/api.ts';
import { IRegistrationOutput } from '@/shared/config/interfaces/Registration/IRegistrationOutput';
import { IResponseError } from '@/shared/config/interfaces/ResponseError/IResponseError';

const useRegistrationWorker = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const regRequest = async (data: IRegistrationWorkerForm): Promise<void> => {
    try {
      setLoading(true);
      const resReg: AxiosResponse<IRegistrationOutput | IResponseError> = await $api.post(
        '/api/auth/register',
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
        setFormError('Произошла ошибка при регистрации');
      }
    } finally {
      setLoading(false);
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { regRequest, formError, clearFormError, loading, complete };
};

export default useRegistrationWorker;
