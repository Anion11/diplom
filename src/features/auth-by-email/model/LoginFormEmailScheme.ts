import * as yup from 'yup';

import { emailScheme, passwordScheme } from '@/shared/config/schemas';

export const authEmailScheme = yup.object({
  email: emailScheme,
  password: passwordScheme
});
