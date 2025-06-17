import { FC } from 'react';

import styles from './WidgetGetWorkers.module.scss';

import WorkerCard from '@/entities/worker-card/ui/WorkerCard';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import useGetWorkers from '@/shared/hooks/useGetWorkers';
import { Button, Loader, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetGetWorkers: FC = () => {
  const { loading, workers, loadMore, hasMore } = useGetWorkers();

  return (
    <div className={styles.container}>
      <SectionHead sectionType={ESectionHeadType.SMALL}>
        <Typography
          type={ETypographyType.h3}
          bold={700}
        >
          Список сотрудников
        </Typography>
      </SectionHead>
      {loading ? (
        <Loader />
      ) : workers && workers.length > 0 ? (
        <div className={styles.container__wrapper}>
          <div className={styles.container__content}>
            {workers.map((worker, index) => (
              <WorkerCard
                key={index}
                data={worker}
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
              Сотрудники не найдены
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetGetWorkers;
