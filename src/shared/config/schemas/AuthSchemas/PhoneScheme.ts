import * as yup from 'yup';

export const phoneScheme = yup
  .string()
  .required('Обязательное поле')
  .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона');
