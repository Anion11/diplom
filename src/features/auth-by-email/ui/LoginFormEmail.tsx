import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { ILoginFormEmail } from '../model/ILoginFormEmail';
import { authEmailScheme } from '../model/LoginFormEmailScheme';
import useLoginEmail from '../model/useLoginEmail';

import styles from './LoginFormEmail.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Input, Typography } from '@/shared/ui';

const LoginFormEmail = () => {
  const { formError, clearFormError, loginRequest, loading } = useLoginEmail();

  const defaultValues: ILoginFormEmail = {
    payload: '',
    password: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormEmail>({
    defaultValues,
    resolver: yupResolver(authEmailScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: ILoginFormEmail) => {
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
            id="email"
            type="email"
            {...field}
            placeholder="Введите E-mail"
            error={errors.payload?.message}
            formError={formError}
            autocomplete="email"
            onChange={e => {
              field.onChange(e);
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
            error={errors.password?.message}
            formError={formError}
            autocomplete="current-password"
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
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

export default LoginFormEmail;
