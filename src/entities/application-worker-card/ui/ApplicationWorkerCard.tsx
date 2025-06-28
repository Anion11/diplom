import clsx from 'clsx';
import { type FC, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import type { IApplicationCard } from '../model/IApplicationCard';
import useApplications from '../model/useApplications';

import styles from './ApplicationWorkerCard.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Input, Typography } from '@/shared/ui';

const ApplicationWorkerCard: FC<IApplicationCard> = ({ data, fetchApplications }) => {
  const notify = () => toast('Заявка была удалена!');
  const successNotify = () => toast('Заявка была принята!');
  const { deleteRequest, loading, complete, accessApplication } = useApplications();

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const handleOpenDeleteModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsModalDeleteOpen(true);
  };

  const handleAccessApplication = () => {
    accessApplication(data.details.id, data.id, { ...data });
  };

  const handleDeleteApplication = () => {
    deleteRequest(id);
    setIsModalDeleteOpen(false);
  };

  useEffect(() => {
    if (complete) {
      fetchApplications();
      successNotify();
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

  const FIO = `${data.person.person.surname} ${data.person.person.name} ${data.person.person.secondName}`;
  const sum = data.finishingCost + data.structuralElCost + data.neighborsCost;

  return (
    <>
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
              <span>Создана:</span> {createdAt}
            </Typography>
          </div>
        </div>

        <div className={styles.card__content}>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p1}>
              <b>Страхователь:</b> {FIO}
            </Typography>
          </div>
          <div className={clsx(styles.card__item, styles.card__item_inner)}>
            <Typography type={ETypographyType.p2}>
              <b>Телефон:</b> {data.person.phone}
            </Typography>
            <Typography type={ETypographyType.p2}>
              <b>Email:</b> {data.person.email}
            </Typography>
          </div>
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
          <div className={styles.card__footer}>
            <div className={styles.card__comment}>
              <Input placeholder="Комментарий" />
            </div>
            <div className={styles.card__buttons}>
              <Button
                onClick={handleAccessApplication}
                text="Подтвердить"
                mods={['green']}
                loading={loading}
              />
              <Button
                onClick={handleCloseDeleteModal}
                mods={['red_text']}
                text="Отклонить"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationWorkerCard;
