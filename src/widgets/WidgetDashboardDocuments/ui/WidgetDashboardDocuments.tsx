import { FC } from 'react';

import styles from './WidgetDashboardDocuments.module.scss';

import { DashboardProfileDocumentForm } from '@/features';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetDashboardDocuments: FC = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.profile}>
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
        <div>Нет документов</div>
      )}
      тут будет форма по добавлению нового документа
    </div>
  );
};

export default WidgetDashboardDocuments;
