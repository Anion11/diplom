import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';

import { IApplicationCard } from '../model/IApplicationCard';
import useApplications from '../model/useApplications';

import styles from './ApplicationCard.module.scss';

import ArrowRightSvg from '@/shared/assets/icons/icon_arrow-right.svg?react';
import TrashSvg from '@/shared/assets/icons/icon_trash.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Modal, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

const ApplicationCard: FC<IApplicationCard> = ({ data, fetchApplications }) => {
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
              Заявка на «Страхование квартиры»
            </Typography>
            <Typography
              className={styles.card__date}
              type={ETypographyType.p2}
            >
              {/* <span>Создана:</span> {new Date().toLocaleString()} */}
              <span>Создана:</span> 07.06.2025
            </Typography>
            <div className={clsx(styles.card__status, styles.card__status_pending)}>
              <Typography
                tag="p"
                type={ETypographyType.p2}
              >
                <b>Статус заявки:</b> <span>Ожидает оплаты</span>
              </Typography>
            </div>
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
              <b>Срок страхования:</b> 12 мес.
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Платеж в год:</b> 10 500 ₽
            </Typography>
          </div>
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
            text="Оплатить"
            rightIcon={<ArrowRightSvg />}
            link="#"
          />
        </div>
      </div>
    </>
  );
};

export default ApplicationCard;
