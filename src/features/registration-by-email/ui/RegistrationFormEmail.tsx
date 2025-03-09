import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { IRegistrationFormEmail } from '../model/IRegistrationFormEmail';
import { regEmailScheme } from '../model/RegistrationFormEmailScheme';
import useRegistrationEmail from '../model/useRegistrationEmail';

import styles from './RegistrationFormEmail.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Input, Typography } from '@/shared/ui';

const RegistrationFormEmail = () => {
  const { formError, clearFormError, regRequest } = useRegistrationEmail();

  const defaultValues: IRegistrationFormEmail = {
    email: '',
    password: '',
    passwordRepeat: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, touchedFields }
  } = useForm<IRegistrationFormEmail>({
    defaultValues,
    resolver: yupResolver(regEmailScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IRegistrationFormEmail) => {
    regRequest(data);
  };

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            id="email"
            type="email"
            {...field}
            placeholder="Введите E-mail"
            error={touchedFields.email ? errors.email?.message : undefined}
            formError={formError}
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
            placeholder="Введите пароль"
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

export default RegistrationFormEmail;
