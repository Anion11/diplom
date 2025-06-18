import * as yup from 'yup';

import { IEditUserForm } from './IEditUserForm';

import { emailScheme, passwordScheme, phoneScheme } from '@/shared/config/schemas';

const nameRegex = /^[А-Яа-яA-Za-zёЁ-]{2,}(?:\s[А-Яа-яA-Za-zёЁ-]{2,})?$/;

export const EditUserFormScheme: yup.ObjectSchema<
  Omit<IEditUserForm, 'documents' | 'id' | 'role'>
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
    .test('is-adult', 'Сотруднику должно быть больше 18 лет', value => {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      const minAdultDate = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );

      return selectedDate <= minAdultDate;
    }),
  password: yup
    .string()
    .notRequired()
    .nonNullable()
    .test('password', value => {
      if (!value) return true;
      try {
        passwordScheme.validateSync(value);
        return true;
      } catch (err) {
        const error = err as yup.ValidationError;
        return new yup.ValidationError(error.errors[0], value, 'password');
      }
    }),
  passwordRepeat: yup
    .string()
    .notRequired()
    .nonNullable()
    .test('password-repeat', 'Пароли не совпадают', function (value) {
      const { password } = this.parent;

      if (!password) {
        return true;
      }

      return value === password;
    })
});
