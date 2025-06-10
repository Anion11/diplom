import * as yup from 'yup';

export const passportSerialNumber = yup
  .string()
  .matches(/^[0-9]{4}-[0-9]{6}$/, 'Некорректые данные');
