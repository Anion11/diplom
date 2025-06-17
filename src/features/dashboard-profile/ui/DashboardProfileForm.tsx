import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { DashboardProfileFormScheme } from '../model/DashboardProfileFormScheme';
import { IDashboardProfileForm } from '../model/IDashboardProfileForm';
import useDashboardProfile from '../model/useDashboardProfile';

import styles from './DashboardProfileForm.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Input, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const DashboardProfileForm: FC = () => {
  const notify = () => toast('Данные были успешно изменены!');
  const { formError, clearFormError, updateRequest, loading, complete } = useDashboardProfile();
  const { login, token, user } = useAuthContext();

  const defaultValues: Omit<IDashboardProfileForm, 'documents' | 'id' | 'role'> = {
    email: user?.email || '',
    phone: user?.phone || '',
    name: user?.person.name || '',
    surname: user?.person.surname || '',
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
  } = useForm<Omit<IDashboardProfileForm, 'documents' | 'id' | 'role'>>({
    defaultValues,
    resolver: yupResolver(DashboardProfileFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IDashboardProfileForm) => {
    const formData: IDashboardProfileForm = {
      ...data,
      id: user?.id || 0,
      role: user?.roles[0].name,
      documents: user?.person.documents || []
    };
    updateRequest(formData);
  };

  useEffect(() => {
    if (complete) {
      clearFormError();
      if (login) {
        login(token || '').then(() => {
          notify();
        });
      } else {
        notify();
      }
    }
  }, [complete, reset]);

  useEffect(() => {
    if (user) {
      reset({
        email: user.email || '',
        phone: user.phone || '',
        name: user.person.name || '',
        surname: user.person.surname || '',
        secondName: user.person.secondName || '',
        birthDate: user.person.birthDate
          ? new Date(user.person.birthDate).toISOString().split('T')[0]
          : ''
      });
    }
  }, [user, reset]);

  return (
    <>
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
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              id="name"
              type="text"
              {...field}
              placeholder="Введите имя"
              error={errors.name?.message}
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
          name="surname"
          control={control}
          render={({ field }) => (
            <Input
              id="surname"
              type="text"
              {...field}
              placeholder="Введите фамилию"
              error={errors.surname?.message}
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
