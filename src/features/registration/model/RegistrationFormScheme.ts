import * as yup from 'yup';

import { emailScheme, passwordScheme, phoneScheme } from '@/shared/config/schemas';

export const RegistrationFormScheme = yup.object({
  firstName: yup.string().required('Обязательное поле'),
  lastName: yup.string().required('Обязательное поле'),
  secondName: yup.string(),
  email: emailScheme,
  phoneNumber: phoneScheme,
  password: passwordScheme,
  passwordRepeat: passwordScheme.oneOf([yup.ref('password')], 'Пароли не совпадают'),
  birthday: yup.string().required('Обязательное поле')
});
