import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import { IWorkerCard } from '../model/IWorkerCard';
import useWorkers from '../model/useWorkers';

import styles from './WorkerCard.module.scss';

import TrashSvg from '@/shared/assets/icons/icon_trash.svg?react';
import { getDocumentLabel } from '@/shared/config/enums/EDocuments';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, List, Modal, Typography } from '@/shared/ui';

const WorkerCard: FC<IWorkerCard> = ({ data }) => {
  const notify = () => toast('Пользователь был успешно удален!');
  const { person, email, phone, createdAt, username } = data;

  const { deleteRequest } = useWorkers();

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
  };

  return (
    <>
      <Modal
        onClose={handleCloseEditModal}
        isOpen={isModalEditOpen}
        headText="Редактирование пользователя"
      >
        йцу
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
          />
          <Button
            onClick={handleCloseDeleteModal}
            mods={['red_text']}
            text="Отмена"
          />
        </div>
      </Modal>
      <div
        className={styles.card}
        onClick={handleOpenEditModal}
      >
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

          <Button
            rightIcon={<TrashSvg />}
            onClick={handleOpenDeleteModal}
            mods={['red', 'icon_xs', 'shadow_none']}
            className={styles.card__delete}
          />
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
                    <li key={index}>{getDocumentLabel(doc.type)}</li>
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

export default WorkerCard;
