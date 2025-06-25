import { type FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';

import type { IPoliceCard } from '../model/IPoliceCard';
import useApplications from '../model/usePolice';

import styles from './PoliceCard.module.scss';

import DownloadSvg from '@/shared/assets/icons/icon_download.svg?react';
import TrashSvg from '@/shared/assets/icons/icon_trash.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Modal, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

const PoliceCard: FC<IPoliceCard> = ({ data, fetchApplications }) => {
  const notify = () => toast('Заявка была удалена!');
  const {
    id,
    finishingCost,
    structuralElCost,
    neighborsCost,
    household,
    monthCost,
    fiasAddress,
    egrn,
    dociments,
    details,
    additionalPersons
  } = data;

  const { deleteRequest, loading, complete } = useApplications();

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const handleOpenDeleteModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsModalDeleteOpen(true);
  };

  const handleDeleteApplication = () => {
    deleteRequest(id);
    setIsModalDeleteOpen(false);
  };

  useEffect(() => {
    if (complete) {
      fetchApplications();
      notify();
    }
  }, [complete]);

  return (
    <>
      <Modal
        onClose={handleCloseDeleteModal}
        isOpen={isModalDeleteOpen}
      >
        <Typography
          type={ETypographyType.h5}
          bold={700}
          className={styles.modal__title}
        >
          Вы точно хотите заявку?
        </Typography>
        <div className={styles.modal__buttons}>
          <Button
            onClick={handleDeleteApplication}
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
              Страхование квартиры
            </Typography>
            <Typography
              className={styles.card__date}
              type={ETypographyType.p2}
            >
              <span>Номер полиса:</span> № 21210B400U007
            </Typography>
            <Typography
              className={styles.card__date}
              type={ETypographyType.p2}
            >
              <span>Срок действия полиса </span> с 07.06.2025 по 07.06.2026
            </Typography>
          </div>
          <div className={styles.card__buttons}>
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
              <b>Общая сумма страхования:</b> 2 100 000 ₽
            </Typography>
          </div>
          <div className={clsx(styles.card__item, styles.card__item_inner)}>
            <Typography type={ETypographyType.p2}>
              <b>Внутренняя отделка:</b> 600 000 ₽
            </Typography>
            <Typography type={ETypographyType.p2}>
              <b>Конструктивные элементы:</b> 0 ₽
            </Typography>
            <Typography type={ETypographyType.p2}>
              <b>Гражданская ответственность:</b> 700 000 ₽
            </Typography>
            <Typography type={ETypographyType.p2}>
              <b>Домашнее имущество:</b> 800 000 ₽
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Адрес:</b> г. Воронеж, ул. 20-летия Октября, д 42, кв. 20
            </Typography>
          </div>

          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Прикрепленные документы:</b>
            </Typography>
            <div className={clsx(styles.card__item, styles.card__item_inner)}>
              <Typography type={ETypographyType.p2}>
                <a href="">Onlayn-vypiska_zemelny_uchastok_pdf_13_40_55.sig</a>
              </Typography>
              <Typography type={ETypographyType.p2}>
                <a href="">Onlayn-vypiska_zemelny_uchastok_13_36_53.pdf</a>
              </Typography>
            </div>
          </div>
          <Button
            className={styles.card__btn}
            type={EButtonTypes.LINK}
            text="Скачать"
            rightIcon={<DownloadSvg />}
            link="#"
          />
        </div>
      </div>
    </>
  );
};

export default PoliceCard;
