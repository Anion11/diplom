import * as yup from 'yup';

import { passwordScheme, phoneScheme } from '@/shared/config/schemas';

export const authPhoneScheme = yup.object({
  phone: phoneScheme,
  password: passwordScheme
});
