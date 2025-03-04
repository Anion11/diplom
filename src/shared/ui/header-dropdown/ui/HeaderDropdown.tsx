import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { IHeaderDropdown } from '../model/IHeaderDropdown';

import styles from './HeaderDropdown.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, Typography } from '@/shared/ui';

const HeaderDropdown: FC<IHeaderDropdown> = props => {
  const { columns, className } = props;

  return (
    <div className={clsx(styles.dropdown, className && className)}>
      <Inner>
        <div className={styles.dropdown__content}>
          {columns.map((column, index) => (
            <div
              key={index}
              className={styles.dropdown__column}
            >
              <div className={styles.dropdown__title}>
                <Typography type={ETypographyType.h3}>{column.title}</Typography>
              </div>
              <div className={styles.dropdown__items}>
                {column.items.map((item, index) => (
                  <Link
                    to={item.link}
                    key={index}
                  >
                    <Typography type={ETypographyType.h5}>{item.name}</Typography>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Inner>
    </div>
  );
};

export default HeaderDropdown;
