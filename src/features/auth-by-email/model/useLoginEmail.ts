import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { ILoginFormEmail } from './ILoginFormEmail';

import { $api } from '@/shared/api/api.ts';
import { ILoginOutput } from '@/shared/config/interfaces/Auth/ILoginOutput.ts';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';

const useLoginEmail = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loginRequest = async (data: ILoginFormEmail): Promise<void> => {
    try {
      setLoading(true);
      const res: AxiosResponse<ILoginOutput> = await $api.post('/api/auth/auth', data);
      setLoading(false);
      if (login) {
        login(res.data.tokenOutput.access);
        navigate('/lk');
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError)
        setFormError(error.response?.data.message || 'Неверно указана почта и/или пароль');
      else setFormError('Произошла ошибка при авторизации');
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { loginRequest, formError, clearFormError, loading };
};

export default useLoginEmail;
