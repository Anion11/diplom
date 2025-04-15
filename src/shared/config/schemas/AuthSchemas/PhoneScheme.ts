import * as yup from 'yup';

export const phoneScheme = yup
  .string()
  .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона');
