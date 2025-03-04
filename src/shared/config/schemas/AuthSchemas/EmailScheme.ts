import * as yup from 'yup';

export const emailScheme = yup
  .string()
  .required('Обязательное поле')
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Некорректный E-mail');
