import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { DashboardEditPasswordFormScheme } from '../model/DashboardEditPasswordFormScheme';
import { IDashboardEditPasswordForm } from '../model/IDashboardEditPasswordForm';
import useDashboardEditPassword from '../model/useDashboardEditPassword';

import styles from './DashboardEditPasswordForm.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Input, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const DashboardEditPasswordForm: FC = () => {
  const notify = () => toast('Пароль был успешно изменен!');
  const { formError, clearFormError, updateRequest, loading, complete } =
    useDashboardEditPassword();
  const { login, token, user } = useAuthContext();

  const defaultValues: Pick<IDashboardEditPasswordForm, 'password' | 'passwordRepeat'> = {
    password: '',
    passwordRepeat: ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm<Pick<IDashboardEditPasswordForm, 'password' | 'passwordRepeat'>>({
    defaultValues,
    resolver: yupResolver(DashboardEditPasswordFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: Pick<IDashboardEditPasswordForm, 'password' | 'passwordRepeat'>) => {
    const formData: Omit<IDashboardEditPasswordForm, 'passwordRepeat'> = {
      id: user?.id || 0,
      name: user?.person.name || '',
      surname: user?.person.surname || '',
      secondName: user?.person.secondName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      birthDate: user?.person.birthDate
        ? new Date(user.person.birthDate).toISOString().split('T')[0]
        : '',
      role: user?.roles[0].name,
      documents: user?.person.documents || [],
      password: data.password
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
  }, [complete]);

  return (
    <>
      <SectionHead sectionType={ESectionHeadType.SMALL}>
        <Typography
          type={ETypographyType.h3}
          bold={700}
        >
          Изменение пароля
        </Typography>
      </SectionHead>
      <form
        noValidate
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div className={styles.form__btns}>
          <Button
            loading={loading}
            className={styles.form__btn}
            text="Изменить пароль"
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

export default DashboardEditPasswordForm;
