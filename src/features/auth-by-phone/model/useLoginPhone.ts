import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { ILoginFormPhone } from '@/features/auth-by-phone/model/ILoginFormPhone';
import { $api } from '@/shared/api/api.ts';
import { ILoginOutput } from '@/shared/config/interfaces/Auth/ILoginOutput.ts';
import { IResponseError } from '@/shared/config/interfaces/ResponseError/IResponseError';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';

const useLoginPhone = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loginRequest = async (data: ILoginFormPhone): Promise<void> => {
    try {
      setLoading(true);
      const res: AxiosResponse<ILoginOutput | IResponseError> = await $api.post(
        '/auth-api/auth',
        data
      );

      if ('token' in res.data) {
        if (login) {
          await login(res.data.token);
          navigate('/lk');
        }
        setFormError(null);
      } else {
        setFormError(res.data.message || 'Неверно указан номер телефона и/или пароль');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setFormError(error.message || 'Ошибка сервера');
      } else {
        setFormError('Произошла ошибка при авторизации');
      }
    } finally {
      setLoading(false);
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { loginRequest, formError, clearFormError, loading };
};

export default useLoginPhone;
