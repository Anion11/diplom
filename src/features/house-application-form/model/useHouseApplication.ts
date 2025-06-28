import { AxiosError } from 'axios';
import { useState } from 'react';

import type { IHouseApplicationForm } from './IHouseApplicationForm';

import { $api } from '@/shared/api/api.ts';
import { EPeriod } from '@/shared/config/enums/EPeriod';

const useHouseApplication = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const applicationRequest = async (data: IHouseApplicationForm): Promise<void> => {
    try {
      setLoading(true);
      await $api
        .post('/application-api/house/register', {
          ...data,
          periodic: EPeriod.YEAR
        })
        .then(registrationRes => {
          if ('statusCode' in registrationRes.data) {
            setFormError(registrationRes.data.message || 'Произошла ошибка при регистрации полиса');
          } else {
            $api.post(
              `/application-api/house/add-docs?id=${registrationRes.data.id}`,
              data.documents
            );
          }
        });
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

  return { applicationRequest, formError, clearFormError, loading, complete };
};

export default useHouseApplication;
