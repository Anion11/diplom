import * as yup from 'yup';

import { IDashboardProfileDocumentForm } from './IDashboardProfileDocumentForm';

export const DashboardProfileDocumentFormScheme: yup.ObjectSchema<IDashboardProfileDocumentForm> =
  yup.object({
    serial: yup.string().required('Обязательное поле'),
    number: yup.string().required('Обязательное поле'),
    authority: yup.string().required('Обязательное поле'),
    dateIssue: yup.string().required('Обязательное поле'),
    type: yup.string().required('Обязательное поле')
  });
