import { FC, useState } from 'react';

import styles from './WidgetDashboardDocuments.module.scss';

import { DashboardProfileAddDocumentForm, DashboardProfileDocumentForm } from '@/features';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import PlusSvg from '@/shared/assets/icons/icon_plus.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Modal, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetDashboardDocuments: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuthContext();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.profile}>
      <Button
        rightIcon={<PlusSvg />}
        onClick={handleOpenModal}
        mods={['primary', 'icon']}
        className={styles.profile__add}
      />
      <Modal
        onClose={handleCloseModal}
        isOpen={isModalOpen}
        headText="Добавление документа"
      >
        <DashboardProfileAddDocumentForm />
      </Modal>
      <SectionHead sectionType={ESectionHeadType.SMALL}>
        <Typography
          type={ETypographyType.h3}
          bold={700}
        >
          Документы
        </Typography>
      </SectionHead>
      {user?.person.documents && user.person.documents.length > 0 ? (
        <div className={styles.profile__documents}>
          {user?.person.documents.map((doc: IDocument) => (
            <DashboardProfileDocumentForm
              key={doc.id}
              document={doc}
            />
          ))}
        </div>
      ) : (
        <div className={styles.profile__empty}>
          <EmptySvg />
          <div className={styles.profile__emptyText}>
            <Typography
              type={ETypographyType.h5}
              bold={700}
              tag="h4"
            >
              Документы не найдены
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetDashboardDocuments;
