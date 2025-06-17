import * as yup from 'yup';

import { IDashboardProfileForm } from './IDashboardProfileForm';

import { emailScheme, phoneScheme } from '@/shared/config/schemas';

export const DashboardProfileFormScheme: yup.ObjectSchema<
  Omit<IDashboardProfileForm, 'documents' | 'id' | 'role'>
> = yup.object({
  name: yup.string().required('Обязательное поле'),
  surname: yup.string().required('Обязательное поле'),
  secondName: yup.string(),
  email: yup
    .string()
    .required('Обязательное поле')
    .concat(emailScheme as yup.StringSchema<string>),
  phone: yup
    .string()
    .required('Обязательное поле')
    .concat(phoneScheme as yup.StringSchema<string>),
  birthDate: yup
    .string()
    .required('Обязательное поле')
    .test('is-adult', 'Вам должно быть больше 18 лет', value => {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      const minAdultDate = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );

      return selectedDate <= minAdultDate;
    })
});
