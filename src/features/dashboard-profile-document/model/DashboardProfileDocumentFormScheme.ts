import * as yup from 'yup';

import { IDashboardProfileDocumentForm } from './IDashboardProfileDocumentForm';

import {
  passportNumberScheme,
  passportSerialScheme
} from '@/shared/config/schemas/AuthSchemas/PassportScheme';

export const DashboardProfileDocumentFormScheme: yup.ObjectSchema<IDashboardProfileDocumentForm> =
  yup.object({
    serial: yup
      .string()
      .required('Обязательное поле')
      .concat(passportSerialScheme as yup.StringSchema<string>),
    number: yup
      .string()
      .required('Обязательное поле')
      .concat(passportNumberScheme as yup.StringSchema<string>),
    authority: yup.string().required('Обязательное поле'),
    dateIssue: yup
      .string()
      .required('Обязательное поле')
      .test('not-in-future', 'Дата не может быть в будущем', value => {
        if (!value) return false;
        const selectedDate = new Date(value);
        const currentDate = new Date();
        return selectedDate <= currentDate;
      })
  });
