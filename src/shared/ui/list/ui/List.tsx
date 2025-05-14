import { FC } from 'react';
import clsx from 'clsx';

import { IList } from '../model/IList';

import styles from './List.module.scss';

const List: FC<IList> = ({ children, className, isNumeric, isPrimary, isSquare }) => {
  return isNumeric ? (
    <ol
      className={clsx(
        styles.list,
        className && className,
        styles.list_numeric,
        isPrimary && styles.list_primary
      )}
    >
      {children}
    </ol>
  ) : (
    <ul
      className={clsx(
        styles.list,
        className && className,
        isPrimary && styles.list_primary,
        isSquare && styles.list_square
      )}
    >
      {children}
    </ul>
  );
};

export default List;
