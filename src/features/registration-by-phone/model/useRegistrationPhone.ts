import { useState } from 'react';
import { AxiosError } from 'axios';

import { IRegistrationFormPhone } from './IRegistrationFormPhone';

import { $api } from '@/shared/api/api.ts';

const useRegistrationPhone = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const regRequest = async (data: IRegistrationFormPhone): Promise<void> => {
    try {
      await $api.post('/api/reg', data);
    } catch (error) {
      if (error instanceof AxiosError)
        setFormError(error.response?.data.message || 'Такой телефон уже зарегистрирован');
      else setFormError('Произошла ошибка при регистрации');
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { regRequest, formError, clearFormError };
};

export default useRegistrationPhone;
