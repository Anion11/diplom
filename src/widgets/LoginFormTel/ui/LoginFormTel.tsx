import { Controller, useForm } from 'react-hook-form';

import styles from './LoginFormTel.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { ILoginWithTel } from '@/shared/config/interfaces/LoginForm/ILoginWithTel';
import useLogin from '@/shared/hooks/useLogin';
import { Button, Input, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/Button/model/IButton';

const LoginFormTel = () => {
  const defaultValues: ILoginWithTel = {
    phone: '+7 (___) ___-__-__',
    password: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginWithTel>({ defaultValues });
  // const navigate = useNavigate();
  const { formError, clearFormError } = useLogin();

  const onSubmit = (data: ILoginWithTel) => {
    console.log(data);
    // loginReq(data);
  };

  return (
    <div className={styles.login}>
      <form
        noValidate
        className={styles.login__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Обязательное поле',
            pattern: {
              value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              message: 'Некорректный номер телефона'
            }
          }}
          render={({ field }) => (
            <Input
              id="phone"
              type="tel"
              {...field}
              placeholder="Введите телефон"
              error={errors.phone?.message}
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
          rules={{
            required: 'Обязательное поле'
          }}
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
        <div className={styles.login__btns}>
          <Button
            className={styles.login__btn}
            text="Войти"
          ></Button>
          {formError && (
            <div className={styles.login__error}>
              <Typography type={ETypographyType.p2}>{formError}</Typography>
            </div>
          )}
          <div className={styles.login__foot}>
            <Typography type={ETypographyType.p1}>Еще нет аккаунта? Зарегистрируйтесь!</Typography>
            <Button
              type={EButtonTypes.LINK}
              link="/reg"
              className={styles.login__reg}
              text="Зарегистрироваться"
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginFormTel;
