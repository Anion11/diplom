import { FC } from 'react';
import clsx from 'clsx';

import styles from './Inner.module.scss';

interface IInner {
  className?: string;
  children: React.ReactNode;
}

const Inner: FC<IInner> = ({ children, className }) => {
  return <div className={clsx(styles.inner, className && className)}>{children}</div>;
};

export default Inner;
