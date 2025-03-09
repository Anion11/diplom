import * as yup from 'yup';

import { emailScheme, passwordScheme } from '@/shared/config/schemas';

export const regEmailScheme = yup.object({
  email: emailScheme,
  password: passwordScheme,
  passwordRepeat: passwordScheme.oneOf([yup.ref('password')], 'Пароли не совпадают')
});
