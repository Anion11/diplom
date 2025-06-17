import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { IRegistrationForm } from '../model/IRegistrationForm';
import { RegistrationFormScheme } from '../model/RegistrationFormScheme';
import useRegistration from '../model/useRegistration';

import styles from './RegistrationForm.module.scss';

import ERoles from '@/shared/config/enums/ERoles';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Input, Typography } from '@/shared/ui';
import Checkbox from '@/shared/ui/checkbox/ui/Checkbox';

const RegistrationForm: FC = () => {
  const { formError, clearFormError, regRequest, loading } = useRegistration();

  const defaultValues: IRegistrationForm = {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    secondName: '',
    role: ERoles.USER,
    birthDate: '',
    password: '',
    passwordRepeat: '',
    checkbox: false
  };

  const currentDate = new Date();

  const maxAgeDate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .split('T')[0];

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Omit<IRegistrationForm, 'role'>>({
    defaultValues,
    resolver: yupResolver(RegistrationFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IRegistrationForm) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checkbox, ...formData } = data;
    const formDataWithCheckbox = { ...formData, role: ERoles.USER };
    regRequest(formDataWithCheckbox);
  };

  return (
    <form
      noValidate
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <Input
            id="firstName"
            type="text"
            {...field}
            placeholder="Введите имя"
            error={errors.firstName?.message}
            formError={formError}
            autocomplete="off"
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <Input
            id="lastName"
            type="text"
            {...field}
            placeholder="Введите фамилию"
            error={errors.lastName?.message}
            formError={formError}
            autocomplete="off"
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <Controller
        name="secondName"
        control={control}
        render={({ field }) => (
          <Input
            id="secondName"
            type="text"
            {...field}
            placeholder="Введите отчество"
            error={errors.secondName?.message}
            formError={formError}
            autocomplete="off"
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <Controller
        name="birthDate"
        control={control}
        render={({ field }) => (
          <Input
            id="birthday"
            type="date"
            {...field}
            placeholder="Введите дату рождения"
            error={errors.birthDate?.message}
            formError={formError}
            max={maxAgeDate}
            autocomplete="off"
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            id="email"
            type="email"
            {...field}
            placeholder="Введите E-mail"
            error={errors.email?.message}
            formError={formError}
            autocomplete="off"
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <Input
            id="phone"
            type="tel"
            {...field}
            placeholder="Введите номер телефона"
            error={errors.phoneNumber?.message}
            formError={formError}
            autocomplete="off"
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
            autocomplete="off"
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
            error={errors.passwordRepeat?.message}
            formError={formError}
            autocomplete="off"
            onChange={e => {
              field.onChange(e);
              clearFormError();
            }}
          />
        )}
      />
      <div className={styles.form__checkbox}>
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="checkbox"
              {...field}
              isChecked={field.value}
              onChange={e => {
                field.onChange(e.target.checked);
                clearFormError();
              }}
              error={errors.checkbox?.message}
              formError={formError}
            >
              Я согласен на обработку{' '}
              <a
                href="/privacy-data.pdf"
                target="_blank"
              >
                персональных данных (ПД)
              </a>{' '}
              и ознакомился с&nbsp;
              <a
                href="/privacy.pdf"
                target="_blank"
              >
                политикой обработки ПД
              </a>
            </Checkbox>
          )}
        />
      </div>

      <div className={styles.form__btns}>
        <Button
          loading={loading}
          className={styles.form__btn}
          text="Зарегистрироваться"
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

export default RegistrationForm;
