import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { DashboardProfileDocumentFormScheme } from '../model/DashboardProfileDocumentFormScheme';
import { IDashboardProfileDocumentForm } from '../model/IDashboardProfileDocumentForm';
import useDashboardProfileDocumentForm from '../model/useDashboardProfileDocumentForm';

import styles from './DashboardProfileDocumentForm.module.scss';

import { IDashboardProfile } from '@/features/dashboard-profile/model/IDashboardProfileForm';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Input, Typography } from '@/shared/ui';

interface IDashboardProfileDocumentFormProps {
  document: IDocument;
}

const DashboardProfileDocumentForm: FC<IDashboardProfileDocumentFormProps> = ({ document }) => {
  const notify = () => toast('Данные были успешно изменены!');
  const { formError, clearFormError, updateRequest, loading, complete } =
    useDashboardProfileDocumentForm();

  const { user } = useAuthContext();

  const defaultValues: IDashboardProfileDocumentForm = {
    serial: document.serial || '',
    number: document.number || '',
    authority: document.authority || '',
    dateIssue: document.dateIssue ? new Date(document.dateIssue).toISOString().split('T')[0] : ''
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = useForm<IDashboardProfileDocumentForm>({
    defaultValues,
    resolver: yupResolver(DashboardProfileDocumentFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const onSubmit = (data: IDashboardProfileDocumentForm) => {
    const documentIndex = user?.person.documents?.findIndex(doc => doc.id === document.id) ?? -1;
    const updatedDocuments = user?.person.documents ? [...user.person.documents] : [];

    if (documentIndex !== -1) {
      updatedDocuments[documentIndex] = {
        ...updatedDocuments[documentIndex],
        ...data
      };
    }

    const formData: IDashboardProfile = {
      email: user?.email || '',
      phoneNumber: user?.phone || '',
      firstName: user?.person.name || '',
      lastName: user?.person.surname || '',
      secondName: user?.person.secondName || '',
      birthDate: user?.person.birthDate
        ? new Date(user.person.birthDate).toISOString().split('T')[0]
        : '',
      role: user?.roles[0].name,
      documents: updatedDocuments
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
      <div className={styles.form__wrapper}>
        <Typography
          type={ETypographyType.h3}
          bold={700}
        >
          {document.type}
        </Typography>
        <form
          noValidate
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="serial"
            control={control}
            render={({ field }) => (
              <Input
                id="serial"
                type="text"
                {...field}
                placeholder="Введите серию"
                error={errors.serial?.message}
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
            name="number"
            control={control}
            render={({ field }) => (
              <Input
                id="number"
                type="text"
                {...field}
                placeholder="Введите номер"
                error={errors.number?.message}
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
            name="authority"
            control={control}
            render={({ field }) => (
              <Input
                id="authority"
                type="text"
                {...field}
                placeholder="Введите кем выдан документ"
                error={errors.authority?.message}
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
            name="dateIssue"
            control={control}
            render={({ field }) => (
              <Input
                id="dateIssue"
                type="date"
                {...field}
                placeholder="Введите дату выдачи"
                error={errors.dateIssue?.message}
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
      </div>
    </>
  );
};

export default DashboardProfileDocumentForm;
