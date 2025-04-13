import { useState } from 'react';
import { AxiosError } from 'axios';

import { IRegistrationForm } from './IRegistrationForm';

import { $api } from '@/shared/api/api.ts';

const useRegistration = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const regRequest = async (data: IRegistrationForm): Promise<void> => {
    try {
      setLoading(true);
      await $api.post('/api/auth/register', { ...data });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError)
        setFormError(error.response?.data.message || 'Такая почта уже зарегистрирована');
      else setFormError('Произошла ошибка при регистрации');
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { regRequest, formError, clearFormError, loading };
};

export default useRegistration;
