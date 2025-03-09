import * as yup from 'yup';

import { passwordScheme, phoneScheme } from '@/shared/config/schemas';

export const regPhoneScheme = yup.object({
  phone: phoneScheme,
  password: passwordScheme,
  passwordRepeat: passwordScheme.oneOf([yup.ref('password')], 'Пароли не совпадают')
});
