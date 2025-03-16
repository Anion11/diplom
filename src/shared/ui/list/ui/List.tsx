import { FC } from 'react';
import clsx from 'clsx';

import { IList } from '../model/IList';

import styles from './List.module.scss';

const List: FC<IList> = ({ children, className }) => {
  return <ul className={clsx(styles.list, className && className)}>{children}</ul>;
};

export default List;
