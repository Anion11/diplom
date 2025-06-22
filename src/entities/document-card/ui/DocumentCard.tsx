import { FC } from 'react';
import { toast } from 'react-toastify';

import { IDocumentCard } from '../model/IDocumentCard';
import useDocuments from '../model/useDocuments';

import styles from './DocumentCard.module.scss';

import CloseSvg from '@/shared/assets/icons/icon_close.svg?react';
import OkSvg from '@/shared/assets/icons/icon_ok.svg?react';
import EDocuments, { getDocumentLabel } from '@/shared/config/enums/EDocuments';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';
import { Button, Typography } from '@/shared/ui';

const DocumentCard: FC<IDocumentCard> = ({ data, fetchUsers }) => {
  const notifyApprove = () => toast('Документ подтвержден!');
  const notifyDisApprove = () => toast('Документ отклонен!');
  const { person, email, phone } = data;

  const document = person.documents.find(doc => doc.type === EDocuments.PASSPORT) as IDocument;

  const { approveRequest } = useDocuments();

  const handleApprove = () => {
    approveRequest(document.id, true);
    notifyApprove();
    fetchUsers();
  };

  const handleDisApprove = () => {
    approveRequest(document.id, false);
    notifyDisApprove();
    fetchUsers();
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__name}>
          <div className={styles.card__text}>
            <Typography
              type={ETypographyType.h5}
              bold={700}
            >
              {person.name} {person.secondName} {person.surname}
            </Typography>
            <div className={styles.card__item}>
              <Typography type={ETypographyType.p2}>
                <b>Email:</b> {email}
              </Typography>
            </div>
            <div className={styles.card__item}>
              <Typography type={ETypographyType.p2}>
                <b>Телефон:</b> {phone}
              </Typography>
            </div>
          </div>
          <div className={styles.card__buttons}>
            <Button
              className={styles.card__edit}
              rightIcon={<OkSvg />}
              onClick={handleApprove}
              mods={['green', 'icon_xs', 'shadow_none']}
            />
            <Button
              rightIcon={<CloseSvg />}
              onClick={handleDisApprove}
              mods={['red', 'icon_xs', 'shadow_none']}
            />
          </div>
        </div>
        <div className={styles.card__head}>
          <Typography type={ETypographyType.h5}>
            <b>{getDocumentLabel(document.type)}:</b>
          </Typography>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p2}>
              <b>Серия:</b> {document.serial}
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p2}>
              <b>Номер:</b> {document.number}
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p2}>
              <b>Кем выдан:</b> {document.authority}
            </Typography>
          </div>
          <div className={styles.card__item}>
            <Typography type={ETypographyType.p2}>
              <b>Дата выдачи:</b> {document.dateIssue}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentCard;
