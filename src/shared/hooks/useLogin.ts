import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { $api } from '@/shared/api/api.ts';
import { ILoginOutput } from '@/shared/config/interfaces/Auth/ILoginOutput.ts';
import { ILoginWithEmail } from '@/shared/config/interfaces/LoginForm/ILoginWithEmail';
import { ILoginWithTel } from '@/shared/config/interfaces/LoginForm/ILoginWithTel';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [formError, setFormError] = useState<string | null>(null);

  const loginReq = async (data: ILoginWithEmail | ILoginWithTel): Promise<void> => {
    try {
      const res: AxiosResponse<ILoginOutput> = await $api.post('/api/auth/login', data);
      if (login) {
        login(res.data.tokenOutput.access);
        navigate('/lk');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setFormError(error.response?.data.message || 'Неверно указан логин и/или пароль');
      } else {
        setFormError('Произошла ошибка при авторизации');
      }
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { loginReq, formError, clearFormError };
};

export default useLogin;
