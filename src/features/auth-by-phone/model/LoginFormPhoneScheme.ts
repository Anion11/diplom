import * as yup from 'yup';

import { ILoginFormPhone } from './ILoginFormPhone';

import { passwordScheme, phoneScheme } from '@/shared/config/schemas';

export const authPhoneScheme: yup.ObjectSchema<ILoginFormPhone> = yup.object({
  payload: yup
    .string()
    .required('Обязательное поле')
    .concat(phoneScheme as yup.StringSchema<string>),
  password: yup
    .string()
    .required('Обязательное поле')
    .concat(passwordScheme as yup.StringSchema<string>)
});
