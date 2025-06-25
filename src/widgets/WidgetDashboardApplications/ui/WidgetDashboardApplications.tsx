import type { FC } from 'react';

import styles from './WidgetDashboardApplications.module.scss';

import { ApplicationCard } from '@/entities';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import useGetApplicationsUserHouse from '@/shared/hooks/useGetApplicationsUserHouse';
import { Button, Loader, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetDashboardApplications: FC = () => {
  const { loading, applications, loadMore, hasMore, fetchApplications } =
    useGetApplicationsUserHouse();

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
          Список заявок
        </Typography>
      </SectionHead>

      {loading ? (
        <Loader />
      ) : applications && applications.length > 0 ? (
        <div className={styles.container__wrapper}>
          <div className={styles.container__content}>
            {applications.map((applications, index) => (
              <ApplicationCard
                key={index}
                data={applications}
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

export default WidgetDashboardApplications;
