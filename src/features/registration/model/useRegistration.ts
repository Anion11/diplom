import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { IRegistrationForm } from './IRegistrationForm';

import { $api } from '@/shared/api/api.ts';
import { ILoginOutput } from '@/shared/config/interfaces/Auth/ILoginOutput';
import { IRegistrationOutput } from '@/shared/config/interfaces/Registration/IRegistrationOutput';
import { IResponseError } from '@/shared/config/interfaces/ResponseError/IResponseError';
import { useAuthContext } from '@/shared/hooks/useAuthContext';

const useRegistration = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const regRequest = async (data: IRegistrationForm): Promise<void> => {
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
      } else {
        const resAuth: AxiosResponse<ILoginOutput> = await $api.post('/api/auth/auth', {
          payload: data.email,
          password: data.password
        });
        if (login) {
          await login(resAuth.data.token);
          navigate('/lk');
        }
        setFormError(null);
      }
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

  return { regRequest, formError, clearFormError, loading };
};

export default useRegistration;
