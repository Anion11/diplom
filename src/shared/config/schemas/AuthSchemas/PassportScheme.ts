import * as yup from 'yup';

export const passportSerialScheme = yup.string().matches(/^[0-9]{4}$/, 'Некорректые данные');

export const passportNumberScheme = yup.string().matches(/^[0-9]{6}$/, 'Некорректые данные');
