import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { DashboardProfileDocumentFormScheme } from '../model/DashboardProfileDocumentFormScheme';
import { IDashboardProfileDocumentForm } from '../model/IDashboardProfileDocumentForm';
import useDashboardProfileDocumentForm from '../model/useDashboardProfileDocumentForm';

import styles from './DashboardProfileDocumentForm.module.scss';

import { IDashboardProfileForm } from '@/features/dashboard-profile/model/IDashboardProfileForm';
import TrashSvg from '@/shared/assets/icons/icon_trash.svg?react';
import { getDocumentLabel } from '@/shared/config/enums/EDocuments';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Input, Modal, Typography } from '@/shared/ui';

interface IDashboardProfileDocumentFormProps {
  document: IDocument;
}

const DashboardProfileDocumentForm: FC<IDashboardProfileDocumentFormProps> = ({ document }) => {
  const notify = () => toast('Данные были успешно изменены!');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formError, clearFormError, updateRequest, loading, complete } =
    useDashboardProfileDocumentForm();

  const { login, token, user } = useAuthContext();

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

  const currentDate = new Date().toISOString().split('T')[0];

  const onSubmit = (data: IDashboardProfileDocumentForm) => {
    const updatedDocuments =
      user?.person.documents?.map(doc => {
        if (doc.id === document.id) {
          return {
            ...doc,
            serial: data.serial,
            number: data.number,
            authority: data.authority,
            dateIssue: data.dateIssue
          };
        }
        return doc;
      }) || [];

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
      phoneNumber: user?.phone || '',
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
  }, [complete, reset]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteDocument = () => {
    const updatedDocuments = user?.person.documents?.filter(doc => doc.id !== document.id) || [];

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
      phoneNumber: user?.phone || '',
      documents: updatedDocuments as IDocument[]
    };

    updateRequest(formData);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.form__wrapper}>
        <Typography
          type={ETypographyType.h4}
          tag="h4"
          bold={700}
        >
          {getDocumentLabel(document.type)}
        </Typography>
        <Button
          rightIcon={<TrashSvg />}
          onClick={handleOpenModal}
          mods={['red', 'icon_xs', 'shadow_none']}
          className={styles.form__close}
        />
        <Modal
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        >
          <Typography
            type={ETypographyType.h5}
            bold={700}
            className={styles.form__modal_title}
          >
            Вы точно хотите удалить {getDocumentLabel(document.type)}?
          </Typography>
          <div className={styles.form__modal_buttons}>
            <Button
              onClick={handleDeleteDocument}
              text="Да"
            />
            <Button
              onClick={handleCloseModal}
              mods={['red_text']}
              text="Отмена"
            />
          </div>
        </Modal>
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
