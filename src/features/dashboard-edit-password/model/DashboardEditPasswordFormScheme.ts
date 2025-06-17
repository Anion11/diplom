import * as yup from 'yup';

import { IDashboardEditPasswordForm } from './IDashboardEditPasswordForm';

import { passwordScheme } from '@/shared/config/schemas';

export const DashboardEditPasswordFormScheme: yup.ObjectSchema<
  Pick<IDashboardEditPasswordForm, 'password' | 'passwordRepeat'>
> = yup.object({
  password: yup
    .string()
    .required('Обязательное поле')
    .concat(passwordScheme as yup.StringSchema<string>),
  passwordRepeat: yup
    .string()
    .required('Обязательное поле')
    .concat(passwordScheme as yup.StringSchema<string>)
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
});
