import * as yup from 'yup';

import { ILoginFormEmail } from './ILoginFormEmail';

import { emailScheme, passwordScheme } from '@/shared/config/schemas';

export const authEmailScheme: yup.ObjectSchema<ILoginFormEmail> = yup.object({
  payload: yup
    .string()
    .required('Обязательное поле')
    .concat(emailScheme as yup.StringSchema<string>),
  password: yup
    .string()
    .required('Обязательное поле')
    .concat(passwordScheme as yup.StringSchema<string>)
});
