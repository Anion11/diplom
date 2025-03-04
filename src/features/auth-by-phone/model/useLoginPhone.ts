import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

import { ILoginFormPhone } from '@/features/auth-by-phone/model/ILoginFormPhone';
import { $api } from '@/shared/api/api.ts';
import { ILoginOutput } from '@/shared/config/interfaces/Auth/ILoginOutput.ts';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';

const useLoginPhone = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [formError, setFormError] = useState<string | null>(null);

  const loginRequest = async (data: ILoginFormPhone): Promise<void> => {
    try {
      const res: AxiosResponse<ILoginOutput> = await $api.post('/api/auth/login', data);
      if (login) {
        login(res.data.tokenOutput.access);
        navigate('/lk');
      }
    } catch (error) {
      if (error instanceof AxiosError)
        setFormError(error.response?.data.message || 'Неверно указан номер телефона и/или пароль');
      else setFormError('Произошла ошибка при авторизации');
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { loginRequest, formError, clearFormError };
};

export default useLoginPhone;
