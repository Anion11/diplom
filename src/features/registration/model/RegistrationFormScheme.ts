import * as yup from 'yup';

import { IRegistrationForm } from './IRegistrationForm';

import { emailScheme, passwordScheme, phoneScheme } from '@/shared/config/schemas';

const nameRegex = /^[А-Яа-яA-Za-zёЁ-]{2,}(?:\s[А-Яа-яA-Za-zёЁ-]{2,})?$/;

export const RegistrationFormScheme: yup.ObjectSchema<Omit<IRegistrationForm, 'role'>> = yup.object(
  {
    firstName: yup
      .string()
      .required('Обязательное поле')
      .trim()
      .matches(nameRegex, 'Некорректное имя'),
    lastName: yup
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
    phoneNumber: yup
      .string()
      .required('Обязательное поле')
      .concat(phoneScheme as yup.StringSchema<string>),
    password: yup
      .string()
      .required('Обязательное поле')
      .concat(passwordScheme as yup.StringSchema<string>),
    passwordRepeat: yup
      .string()
      .required('Обязательное поле')
      .concat(passwordScheme as yup.StringSchema<string>)
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
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
      }),
    checkbox: yup.boolean().required('Обязательное поле').oneOf([true], 'Обязательное поле')
  }
);
