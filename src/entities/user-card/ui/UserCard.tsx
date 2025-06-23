import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';

import { IUserCard } from '../model/IUserCard';
import useUsers from '../model/useUsers';

import styles from './UserCard.module.scss';

import { EditUserForm } from '@/features';
import EditSvg from '@/shared/assets/icons/icon_edit.svg?react';
import TrashSvg from '@/shared/assets/icons/icon_trash.svg?react';
import { getDocumentLabel } from '@/shared/config/enums/EDocuments';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, List, Modal, Typography } from '@/shared/ui';

const UserCard: FC<IUserCard> = ({ data, updateUser, fetchUsers }) => {
  const notify = () => toast('Пользователь был успешно удален!');
  const { person, email, phone, createdAt, username } = data;

  const { deleteRequest, loading } = useUsers();

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleCloseEditModal = () => {
    setIsModalEditOpen(false);
  };

  const handleOpenEditModal = () => {
    setIsModalEditOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const handleOpenDeleteModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsModalDeleteOpen(true);
  };

  const handleDeleteUser = () => {
    deleteRequest(person.id);
    setIsModalDeleteOpen(false);
    notify();
    fetchUsers();
  };

  return (
    <>
      <Modal
        onClose={handleCloseEditModal}
        isOpen={isModalEditOpen}
        headText="Редактирование данных клиента"
      >
        <EditUserForm
          user={data}
          closeModal={handleCloseEditModal}
          updateUser={updateUser}
        />
      </Modal>
      <Modal
        onClose={handleCloseDeleteModal}
        isOpen={isModalDeleteOpen}
      >
        <Typography
          type={ETypographyType.h5}
          bold={700}
          className={styles.modal__title}
        >
          Вы точно хотите удалить пользователя {person.name} {person.secondName} {person.surname}?
        </Typography>
        <div className={styles.modal__buttons}>
          <Button
            onClick={handleDeleteUser}
            text="Да"
            loading={loading}
          />
          <Button
            onClick={handleCloseDeleteModal}
            mods={['red_text']}
            text="Отмена"
          />
        </div>
      </Modal>
      <div className={styles.card}>
        <div className={styles.card__name}>
          <div className={styles.card__text}>
            <Typography
              type={ETypographyType.h5}
              bold={700}
            >
              {person.surname} {person.name} {person.secondName}
            </Typography>
            <Typography
              className={styles.card__date}
              type={ETypographyType.p2}
            >
              <span>Username:</span> {username}
            </Typography>
            <Typography
              className={styles.card__date}
              type={ETypographyType.p2}
            >
              <span>Создан:</span> {new Date(createdAt).toLocaleDateString()}
            </Typography>
          </div>
          <div className={styles.card__buttons}>
            <Button
              className={styles.card__edit}
              rightIcon={<EditSvg />}
              onClick={handleOpenEditModal}
              mods={['icon_xs', 'shadow_none']}
            />
            <Button
              rightIcon={<TrashSvg />}
              onClick={handleOpenDeleteModal}
              mods={['red', 'icon_xs', 'shadow_none']}
            />
          </div>
        </div>

        <div className={styles.card__content}>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Email:</b> {email}
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Телефон:</b> {phone}
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Дата рождения:</b> {new Date(person.birthDate).toLocaleDateString()}
            </Typography>
          </div>
          {person.documents && person.documents.length > 0 && (
            <div className={styles.card__item}>
              <Typography type={ETypographyType.p1}>
                <b>Документы:</b>
                <List className={styles.card__docs}>
                  {person.documents.map((doc, index) => (
                    <li
                      key={index}
                      className={clsx(styles.card__doc, doc.approved && styles.card__doc_approved)}
                    >
                      {getDocumentLabel(doc.type)} {doc.approved}
                    </li>
                  ))}
                </List>
              </Typography>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserCard;
