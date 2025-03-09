import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { IRegistrationFormPhone } from '../model/IRegistrationFormPhone';
import { regPhoneScheme } from '../model/RegistrationFormPhoneScheme';
import useLoginPhone from '../model/useRegistrationPhone';

import styles from './RegistrationFormPhone.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Input, Typography } from '@/shared/ui';

const RegistrationFormPhone = () => {
  const { formError, clearFormError, regRequest } = useLoginPhone();

  const defaultValues: IRegistrationFormPhone = {
    phone: '+7 (___) ___-__-__',
    password: '',
    passwordRepeat: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, touchedFields }
  } = useForm<IRegistrationFormPhone>({
    defaultValues,
    resolver: yupResolver(regPhoneScheme),
    mode: 'onTouched'
  });

  const onSubmit = (data: IRegistrationFormPhone) => {
    regRequest(data);
  };

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input
            id="phone"
            type="tel"
            {...field}
            placeholder="Введите номер телефона"
            error={errors.phone?.message}
            formError={formError}
            onChange={(value: string) => {
              field.onChange(value);
              clearFormError();
            }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            id="password"
            type="password"
            {...field}
            placeholder="Введите пароль"
            error={touchedFields.password ? errors.password?.message : undefined}
            formError={formError}
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <Controller
        name="passwordRepeat"
        control={control}
        render={({ field }) => (
          <Input
            id="passwordRepeat"
            type="password"
            {...field}
            placeholder="Повторите пароль"
            error={touchedFields.passwordRepeat ? errors.passwordRepeat?.message : undefined}
            formError={formError}
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <div className={styles.form__btns}>
        <Button
          className={styles.form__btn}
          text="Зарегистрироваться"
          disabled={!isValid}
        ></Button>
        {formError && (
          <div className={styles.form__error}>
            <Typography type={ETypographyType.p2}>{formError}</Typography>
          </div>
        )}
        <div className={styles.form__foot}>
          <Typography type={ETypographyType.p1}>
            Уже есть аккаунт? <Link to={'/login'}>Войти</Link>
          </Typography>
        </div>
      </div>
    </form>
  );
};

export default RegistrationFormPhone;
