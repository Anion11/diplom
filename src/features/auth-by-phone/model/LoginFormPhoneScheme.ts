import * as yup from 'yup';

import { passwordScheme, phoneScheme } from '@/shared/config/schemas';

export const authPhoneScheme = yup.object({
  payload: phoneScheme,
  password: passwordScheme
});
