import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { DashboardProfileFormScheme } from '../model/DashboardProfileFormScheme';
import { IDashboardProfile, IDashboardProfileForm } from '../model/IDashboardProfileForm';
import useDashboardProfile from '../model/useDashboardProfile';

import styles from './DashboardProfileForm.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import useAuth from '@/shared/hooks/useAuth';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Input, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const DashboardProfileForm: FC = () => {
  const notify = () => toast('Данные были успешно изменены!');
  const { formError, clearFormError, updateRequest, loading, complete } = useDashboardProfile();
  const { user } = useAuthContext();
  const { login, token } = useAuth();

  const defaultValues: IDashboardProfileForm = {
    email: user?.email || '',
    phoneNumber: user?.phone || '',
    firstName: user?.person.name || '',
    lastName: user?.person.surname || '',
    secondName: user?.person.secondName || '',
    birthDate: user?.person.birthDate
      ? new Date(user.person.birthDate).toISOString().split('T')[0]
      : ''
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
    formState: { errors, isDirty },
    reset
  } = useForm<Omit<IDashboardProfileForm, 'role'>>({
    defaultValues,
    resolver: yupResolver(DashboardProfileFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IDashboardProfileForm) => {
    const formData: IDashboardProfile = {
      ...data,
      role: user?.roles[0].name,
      documents: user?.person.documents || []
    };
    updateRequest(formData);
    // console.log(token);
    // login(token || '');
  };

  useEffect(() => {
    if (complete) {
      notify();
      reset({
        ...defaultValues
      });
      clearFormError();
    }
  }, [complete, reset]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className={styles.toast}
      />
      <SectionHead sectionType={ESectionHeadType.SMALL}>
        <Typography
          type={ETypographyType.h3}
          bold={700}
        >
          Профиль
        </Typography>
      </SectionHead>
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

        <div className={styles.form__btns}>
          <Button
            loading={loading}
            className={styles.form__btn}
            text="Сохранить изменения"
            disabled={!isDirty}
          ></Button>
          {formError && (
            <div className={styles.form__error}>
              <Typography type={ETypographyType.p2}>{formError}</Typography>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default DashboardProfileForm;
