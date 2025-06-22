import { FC } from 'react';

import styles from './WidgetCheckDocuments.module.scss';

import { DocumentCard } from '@/entities';
import SearchInput from '@/features/search-imput/ui/SearchInput';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import useGetDocumentsUsers from '@/shared/hooks/useGetDocumentsUsers';
import { Button, Loader, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetCheckDocuments: FC = () => {
  const {
    loading,
    usersWithUnapprovedPassports,
    loadMore,
    hasMore,
    search,
    handleChange,
    searchUsers,
    fetchUsers
  } = useGetDocumentsUsers();

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
          Проверка документов
        </Typography>
        <SearchInput
          value={search}
          onChange={handleChange}
          onSearch={searchUsers}
          placeholder="Поиск по номеру телефона/почте"
        />
      </SectionHead>
      {loading ? (
        <Loader />
      ) : usersWithUnapprovedPassports.length > 0 ? (
        <div className={styles.container__wrapper}>
          <div className={styles.container__content}>
            {usersWithUnapprovedPassports.map((user, index) => (
              <DocumentCard
                key={index}
                data={user}
                fetchUsers={fetchUsers}
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
              Документов на проверку не найдено
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetCheckDocuments;
