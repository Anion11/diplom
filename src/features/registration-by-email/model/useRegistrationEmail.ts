import { useState } from 'react';
import { AxiosError } from 'axios';

import { IRegistrationFormEmail } from './IRegistrationFormEmail';

import { $api } from '@/shared/api/api.ts';

const useRegistrationEmail = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const regRequest = async (data: IRegistrationFormEmail): Promise<void> => {
    console.log(data);
    try {
      await $api.post('/api/reg', data);
    } catch (error) {
      if (error instanceof AxiosError)
        setFormError(error.response?.data.message || 'Такая почта уже зарегистрирована');
      else setFormError('Произошла ошибка при регистрации');
    }
  };

  const clearFormError = () => {
    setFormError(null);
  };

  return { regRequest, formError, clearFormError };
};

export default useRegistrationEmail;
