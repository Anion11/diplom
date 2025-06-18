import * as yup from 'yup';

import { IDashboardProfileForm } from './IDashboardProfileForm';

import { emailScheme, phoneScheme } from '@/shared/config/schemas';

const nameRegex = /^[А-Яа-яA-Za-zёЁ-]{2,}(?:\s[А-Яа-яA-Za-zёЁ-]{2,})?$/;

export const DashboardProfileFormScheme: yup.ObjectSchema<
  Omit<IDashboardProfileForm, 'documents' | 'id' | 'role'>
> = yup.object({
  name: yup.string().required('Обязательное поле').trim().matches(nameRegex, 'Некорректное имя'),
  surname: yup
    .string()
    .required('Обязательное поле')
    .trim()
    .matches(nameRegex, 'Некорректная фамилия'),
  secondName: yup
    .string()
    .transform(value => value?.trim() || '')
    .test('secondName-validation', 'Некорректное отчество', value => {
      if (!value) return true;
      return nameRegex.test(value);
    }),
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
