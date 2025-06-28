import clsx from 'clsx';
import { type FC, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import type { IApplicationCard } from '../model/IApplicationCard';
import useApplications from '../model/useApplications';

import styles from './ApplicationCard.module.scss';

import ArrowRightSvg from '@/shared/assets/icons/icon_arrow-right.svg?react';
import DownloadSvg from '@/shared/assets/icons/icon_download.svg?react';
import TrashSvg from '@/shared/assets/icons/icon_trash.svg?react';
import { EApplicationStatus } from '@/shared/config/enums/EApplicationStatus';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Modal, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

const ApplicationCard: FC<IApplicationCard> = ({ data, fetchApplications, isPolice = false }) => {
  const successDeleteNotify = () => toast('Заявка была удалена!');
  const errorDeleteNotify = () => toast('Ошибка при удалении заявки');

  const { deleteRequest, loading, complete, handlePayment } = useApplications();

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const handleOpenDeleteModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsModalDeleteOpen(true);
  };

  const handleDeleteApplication = () => {
    deleteRequest(data.id);
    setIsModalDeleteOpen(false);
  };

  useEffect(() => {
    if (complete === null) return;

    if (complete) {
      successDeleteNotify();
      fetchApplications();
    } else {
      errorDeleteNotify();
    }
  }, [complete]);

  const term = useMemo(() => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return months;
  }, [data.startDate]);

  const createdAt = useMemo(
    () =>
      new Date(new Date(data.startDate).getTime() + 3 * 60 * 60 * 1000)
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })
        .replace(/\//g, '.'),
    [data.startDate]
  );
  const endDate = useMemo(
    () =>
      new Date(new Date(data.endDate).getTime() + 3 * 60 * 60 * 1000).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
    [data.endDate]
  );

  const sum = data.finishingCost + data.structuralElCost + data.neighborsCost;

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
          Вы точно хотите удалить заявку?
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
            {isPolice && (
              <Typography
                className={styles.card__date}
                type={ETypographyType.p2}
              >
                <span>Номер полиса {data.details.num}</span>
              </Typography>
            )}
            <Typography
              className={styles.card__date}
              type={ETypographyType.p2}
            >
              {isPolice ? (
                <span>
                  Срок действия полиса с {createdAt} по {endDate}
                </span>
              ) : (
                <span>Создана: {createdAt}</span>
              )}
            </Typography>

            {!isPolice && (
              <div className={clsx(styles.card__status, styles.card__status_pending)}>
                <Typography
                  tag="p"
                  type={ETypographyType.p2}
                >
                  <b>Статус заявки:</b>{' '}
                  <span>
                    {data.details.status === EApplicationStatus.WAIT_PAYMENT
                      ? 'Ожидает оплаты'
                      : 'Заявка в обработке'}
                  </span>
                </Typography>
              </div>
            )}
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
          {!isPolice && (
            <>
              <div className={styles.card__item}>
                <Typography type={ETypographyType.p1}>
                  <b>Срок страхования:</b> {term} мес.
                </Typography>
              </div>
              <div className={styles.card__item}>
                <Typography type={ETypographyType.p1}>
                  <b>Платеж в год:</b> {Number(data.cost).toLocaleString('ru-RU')} ₽
                </Typography>
              </div>
            </>
          )}
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Общая сумма страхования:</b> {sum.toLocaleString('ru-RU')} ₽
            </Typography>
          </div>
          <div className={clsx(styles.card__item, styles.card__item_inner)}>
            <Typography type={ETypographyType.p2}>
              <b>Внутренняя отделка:</b> {data.finishingCost.toLocaleString('ru-RU')} ₽
            </Typography>
            <Typography type={ETypographyType.p2}>
              <b>Конструктивные элементы:</b> {data.structuralElCost.toLocaleString('ru-RU')} ₽
            </Typography>
            <Typography type={ETypographyType.p2}>
              <b>Гражданская ответственность:</b> {data.neighborsCost.toLocaleString('ru-RU')} ₽
            </Typography>
            <Typography type={ETypographyType.p2}>
              <b>Домашнее имущество:</b> {data.household.toLocaleString('ru-RU')} ₽
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Адрес:</b> {data.fiasAddress}
            </Typography>
          </div>

          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Прикрепленные документы:</b>
            </Typography>
            <ul className={clsx(styles.card__item, styles.card__item_inner)}>
              {data.documents.map(doc => (
                <li key={doc.uri}>
                  <Typography type={ETypographyType.p2}>
                    <a
                      href={`http://insure-max-life-flow.ru/s3/${doc.uri}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.filename}
                    </a>
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          {data.details.status === EApplicationStatus.WAIT_PAYMENT && (
            <Button
              className={styles.card__btn}
              type={EButtonTypes.LINK}
              text="Оплатить"
              onClick={() => handlePayment(data.details.id)}
              rightIcon={<ArrowRightSvg />}
              link="#"
            />
          )}
          {data.details.status === EApplicationStatus.SUCCESS && (
            <Button
              className={styles.card__btn}
              type={EButtonTypes.LINK}
              text="Скачать полис"
              rightIcon={isPolice ? <DownloadSvg /> : <ArrowRightSvg />}
              link="#"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicationCard;
