import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { DashboardProfileAddDocumentFormScheme } from '../model/DashboardProfileAddDocumentFormScheme';
import { IDashboardProfileAddDocumentForm } from '../model/IDashboardProfileAddDocumentForm';
import useDashboardProfileAddDocumentForm from '../model/useDashboardProfileAddDocumentForm';

import styles from './DashboardProfileAddDocumentForm.module.scss';

import { IDashboardProfileForm } from '@/features/dashboard-profile/model/IDashboardProfileForm';
import EDocuments, { documentTypeLabels } from '@/shared/config/enums/EDocuments';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Input, Typography } from '@/shared/ui';

interface SelectOption {
  value: EDocuments;
  label: string;
  isDisabled?: boolean;
}

const DashboardProfileAddDocumentForm: FC = () => {
  const notify = () => toast('Документ был добавлен!');
  const { formError, clearFormError, updateRequest, loading, complete } =
    useDashboardProfileAddDocumentForm();

  const { login, token, user } = useAuthContext();

  const defaultValues: IDashboardProfileAddDocumentForm = {
    serial: '',
    number: '',
    authority: '',
    dateIssue: '',
    type: EDocuments.PASSPORT
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IDashboardProfileAddDocumentForm>({
    defaultValues,
    resolver: yupResolver(DashboardProfileAddDocumentFormScheme),
    shouldUnregister: true,
    mode: 'onTouched'
  });

  const currentDate = new Date().toISOString().split('T')[0];

  const onSubmit = (data: IDashboardProfileAddDocumentForm) => {
    const newDocument: Omit<IDocument, 'id' | 'userApproved'> = {
      serial: data.serial,
      number: data.number,
      authority: data.authority,
      dateIssue: data.dateIssue,
      type: data.type,
      personId: user?.person.id || 0,
      isApproved: false,
      approved: false
    };

    const updatedDocuments = user?.person.documents
      ? [...user.person.documents, newDocument]
      : [newDocument];

    const formData: IDashboardProfileForm = {
      id: user?.id || 0,
      name: user?.person.name || '',
      surname: user?.person.surname || '',
      secondName: user?.person.secondName || '',
      birthDate: user?.person.birthDate
        ? new Date(user.person.birthDate).toISOString().split('T')[0]
        : '',
      role: user?.roles[0].name,
      email: user?.email || '',
      phone: user?.phone || '',
      documents: updatedDocuments as IDocument[]
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
    reset();
  }, [complete, reset]);

  const getAvailableDocumentOptions = (): SelectOption[] | undefined => {
    const existingTypes = new Set(user?.person.documents.map(doc => doc.type));

    const availableTypes = Object.values(EDocuments).filter(type => !existingTypes.has(type));

    if (availableTypes.length === 0) {
      return undefined;
    }

    return availableTypes.map(type => ({
      value: type,
      label: documentTypeLabels[type] || 'Неизвестный документ'
    }));
  };

  const options = getAvailableDocumentOptions();

  return (
    <>
      {options && options.length > 0 ? (
        <form
          noValidate
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <Select
                  options={options}
                  value={options.find(option => option.value === field.value)}
                  onChange={(selectedOption: SingleValue<SelectOption>) => {
                    if (!selectedOption?.isDisabled) {
                      field.onChange(selectedOption?.value);
                      clearFormError();
                    }
                  }}
                  className={styles.select}
                  isSearchable={false}
                />
              );
            }}
          />
          <Controller
            name="serial"
            control={control}
            render={({ field }) => (
              <Input
                id="serial"
                type="serial"
                {...field}
                placeholder="Серия"
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
                type="doc_number"
                {...field}
                placeholder="Номер"
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
                placeholder="Кем выдан"
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
                placeholder="Дата выдачи"
                max={currentDate}
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
              text="Добавить"
            ></Button>
            {formError && (
              <div className={styles.form__error}>
                <Typography type={ETypographyType.p2}>{formError}</Typography>
              </div>
            )}
          </div>
        </form>
      ) : (
        <Typography
          type={ETypographyType.h5}
          bold={700}
        >
          Нет доступных документов для добавления
        </Typography>
      )}
    </>
  );
};

export default DashboardProfileAddDocumentForm;
