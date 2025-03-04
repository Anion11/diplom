import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ILoginFormPhone } from '../model/ILoginFormPhone';
import { authPhoneScheme } from '../model/LoginFormPhoneScheme';
import useLoginPhone from '../model/useLoginPhone';

import styles from './LoginFormPhone.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Input, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

const LoginFormPhone = () => {
  const { formError, clearFormError, loginRequest } = useLoginPhone();

  const defaultValues: ILoginFormPhone = {
    phone: '+7 (___) ___-__-__',
    password: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormPhone>({ defaultValues, resolver: yupResolver(authPhoneScheme) });

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
            error={errors.password?.message}
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
          text="Войти"
        ></Button>
        {formError && (
          <div className={styles.form__error}>
            <Typography type={ETypographyType.p2}>{formError}</Typography>
          </div>
        )}
        <div className={styles.form__foot}>
          <Typography type={ETypographyType.p1}>Еще нет аккаунта? Зарегистрируйтесь!</Typography>
          <Button
            type={EButtonTypes.LINK}
            link="/reg"
            className={styles.form__reg}
            text="Зарегистрироваться"
          ></Button>
        </div>
      </div>
    </form>
  );
};

export default LoginFormPhone;
