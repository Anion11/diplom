import { Controller, useForm } from 'react-hook-form';

import styles from './LoginFormEmail.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { ILoginWithEmail } from '@/shared/config/interfaces/LoginForm/ILoginWithEmail';
import useLogin from '@/shared/hooks/useLogin';
import { Button, Input, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/Button/model/IButton';

const LoginFormEmail = () => {
  const defaultValues: ILoginWithEmail = {
    email: '',
    password: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginWithEmail>({ defaultValues });
  // const navigate = useNavigate();
  const { formError, clearFormError } = useLogin();

  const onSubmit = (data: ILoginWithEmail) => {
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
          name="email"
          control={control}
          rules={{
            required: 'Обязательное поле',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный email'
            }
          }}
          render={({ field }) => (
            <Input
              id="email"
              type="email"
              {...field}
              placeholder="Введите email"
              error={errors.email?.message}
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

export default LoginFormEmail;
