import { FC } from 'react';

import styles from './WidgetGetWorkers.module.scss';

import { WorkerCard } from '@/entities';
import SearchInput from '@/features/search-imput/ui/SearchInput';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import useGetWorkers from '@/shared/hooks/useGetWorkers';
import { Button, Loader, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetGetWorkers: FC = () => {
  const {
    loading,
    workers,
    loadMore,
    hasMore,
    search,
    handleChange,
    searchWorkers,
    updateWorker,
    fetchWorkers
  } = useGetWorkers();

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
          Список сотрудников
        </Typography>
        <SearchInput
          value={search}
          onChange={handleChange}
          onSearch={searchWorkers}
          placeholder="Поиск по номеру телефона/почте"
        />
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
                updateWorker={updateWorker}
                fetchWorkers={fetchWorkers}
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
