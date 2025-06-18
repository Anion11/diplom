import { FC } from 'react';

import styles from './WidgetGetUsers.module.scss';

import { UserCard } from '@/entities';
import SearchInput from '@/features/search-imput/ui/SearchInput';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import useGetUsers from '@/shared/hooks/useGetUsers';
import { Button, Loader, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetGetUsers: FC = () => {
  const { loading, users, loadMore, hasMore, search, handleChange, searchUsers, updateUser } =
    useGetUsers();

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
          Список клиентов
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
      ) : users && users.length > 0 ? (
        <div className={styles.container__wrapper}>
          <div className={styles.container__content}>
            {users.map((user, index) => (
              <UserCard
                key={index}
                data={user}
                updateUser={updateUser}
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
              Клиенты не найдены
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetGetUsers;
