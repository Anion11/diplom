import { FC, useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { EditWorkerFormScheme } from '../model/EditWorkerFormScheme';
import { IEditWorkerForm } from '../model/IEditWorkerForm';
import useEditWorker from '../model/useEditWorker';

import styles from './EditWorkerForm.module.scss';

import ERoles from '@/shared/config/enums/ERoles';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IWorker } from '@/shared/config/interfaces/Worker/IWorker';
import { Button, Input, Typography } from '@/shared/ui';

interface IEditWorkerFormProps {
  worker: IWorker;
  closeModal?: () => void;
  updateWorker: (worker: IWorker) => void;
}

const EditWorkerForm: FC<IEditWorkerFormProps> = props => {
  const { worker, closeModal, updateWorker } = props;
  const notify = () => toast('Данные сотрудника были успешно обновлены!');
  const { formError, clearFormError, updateRequest, loading, complete } = useEditWorker();
  const submittedDataRef = useRef<IEditWorkerForm | null>(null);

  const defaultValues: IEditWorkerForm = {
    email: worker.email,
    phone: worker.phone,
    name: worker.person.name,
    surname: worker.person.surname,
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
    formState: { errors, isDirty },
    reset
  } = useForm<Omit<IEditWorkerForm, 'role'>>({
    defaultValues,
    resolver: yupResolver(EditWorkerFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IEditWorkerForm) => {
    submittedDataRef.current = data;

    const formData: Omit<IEditWorkerForm, 'passwordRepeat'> = {
      ...data,
      id: worker.id,
      role: ERoles.WORKER,
      documents: []
    };
    updateRequest(formData);
  };

  useEffect(() => {
    if (complete) {
      notify();
      reset({
        ...defaultValues
      });
      clearFormError();
      if (closeModal) {
        closeModal();
      }

      const submitted = submittedDataRef.current;

      if (submitted) {
        updateWorker({
          ...worker,
          ...(submitted.password ? { password: submitted.password } : {}),
          email: submitted.email,
          phone: submitted.phone,
          person: {
            ...worker.person,
            birthDate: new Date(submitted.birthDate),
            documents: [],
            name: submitted.name,
            secondName: submitted.secondName ?? '',
            surname: submitted.surname
          }
        });
      }
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
            disabled={!isDirty}
            text="Сохранить изменения"
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
