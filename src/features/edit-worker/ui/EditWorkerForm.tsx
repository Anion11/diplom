import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { EditWorkerFormScheme } from '../model/EditWorkerFormScheme';
import { IEditWorkerForm } from '../model/IEditWorkerForm';
import useRegistrationWorker from '../model/useEditWorker';

import styles from './EditWorkerForm.module.scss';

import ERoles from '@/shared/config/enums/ERoles';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IWorker } from '@/shared/config/interfaces/Worker/IWorker';
import { Button, Input, Typography } from '@/shared/ui';

interface IEditWorkerFormProps {
  worker: IWorker;
}

const EditWorkerForm: FC<IEditWorkerFormProps> = props => {
  const { worker } = props;
  const notify = () => toast('Данные сотрудника были  успешно обновлены!');
  const { formError, clearFormError, regRequest, loading, complete } = useRegistrationWorker();

  const defaultValues: IEditWorkerForm = {
    email: worker.email,
    phoneNumber: worker.phone,
    firstName: worker.person.name,
    lastName: worker.person.surname,
    secondName: worker.person.secondName,
    role: ERoles.WORKER,
    birthDate: new Date(worker.person.birthDate).toISOString().split('T')[0],
    password: '',
    passwordRepeat: ''
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
    formState: { errors },
    reset
  } = useForm<Omit<IEditWorkerForm, 'role'>>({
    defaultValues,
    resolver: yupResolver(EditWorkerFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IEditWorkerForm) => {
    const formData = { ...data, role: ERoles.WORKER };
    regRequest(formData);
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

        <div className={styles.form__btns}>
          <Button
            loading={loading}
            className={styles.form__btn}
            text="Добавить сотрудника"
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

export default EditWorkerForm;
