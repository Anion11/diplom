import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { ILoginFormPhone } from '../model/ILoginFormPhone';
import { authPhoneScheme } from '../model/LoginFormPhoneScheme';
import useLoginPhone from '../model/useLoginPhone';

import styles from './LoginFormPhone.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Input, Typography } from '@/shared/ui';

const LoginFormPhone = () => {
  const { formError, clearFormError, loginRequest, loading } = useLoginPhone();

  const defaultValues: ILoginFormPhone = {
    payload: '+7 (___) ___-__-__',
    password: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormPhone>({
    defaultValues,
    resolver: yupResolver(authPhoneScheme),
    mode: 'onTouched'
  });

  const onSubmit = (data: ILoginFormPhone) => {
    loginRequest(data);
  };

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="payload"
        control={control}
        render={({ field }) => (
          <Input
            id="phone"
            type="tel"
            {...field}
            placeholder="Введите номер телефона"
            error={errors.payload?.message}
            formError={formError}
            autocomplete="phone"
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
        render={({ field }) => {
          return (
            <Input
              id="password"
              type="password"
              {...field}
              placeholder="Введите пароль"
              error={errors.password?.message}
              formError={formError}
              autocomplete="current-password"
              onChange={e => {
                field.onChange(e);
                clearFormError();
              }}
            />
          );
        }}
      />
      <div className={styles.form__btns}>
        <Button
          loading={loading}
          className={styles.form__btn}
          text="Войти"
        ></Button>
        {formError && (
          <div className={styles.form__error}>
            <Typography type={ETypographyType.p2}>{formError}</Typography>
          </div>
        )}
        <div className={styles.form__foot}>
          <Typography type={ETypographyType.p1}>
            Еще нет аккаунта? <Link to={'/registration'}>Зарегистрироваться</Link>
          </Typography>
        </div>
      </div>
    </form>
  );
};

export default LoginFormPhone;
