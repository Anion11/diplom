import type { FC } from 'react';

import styles from './WidgetDashboardPolice.module.scss';

import { ApplicationCard } from '@/entities';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import useGetPolice from '@/shared/hooks/useGetPolice';
import { Button, Loader, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetDashboardPolice: FC = () => {
  const { loading, applications, loadMore, hasMore, fetchApplications } = useGetPolice();
  console.log(applications);

  return (
    <div className={styles.container}>
      <SectionHead
        sectionType={ESectionHeadType.SMALL}
        className={styles.container__head}
      >
        <Typography
          type={ETypographyType.h3}
          bold={700}
        >
          Список полисов
        </Typography>
      </SectionHead>

      {loading ? (
        <Loader />
      ) : applications?.length ? (
        <div className={styles.container__wrapper}>
          <div className={styles.container__content}>
            {applications.map(application => (
              <ApplicationCard
                isPolice
                key={application.id}
                data={application}
                fetchApplications={fetchApplications}
              />
            ))}
          </div>
          {hasMore && (
            <Button
              loading={loading}
              className={styles.container__btn}
              onClick={loadMore}
              text="Показать ещё"
            />
          )}
        </div>
      ) : (
        <div className={styles.container__empty}>
          <EmptySvg />
          <div className={styles.container__emptyText}>
            <Typography
              type={ETypographyType.h5}
              bold={700}
              tag="h4"
            >
              Заявки не найдены
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetDashboardPolice;
