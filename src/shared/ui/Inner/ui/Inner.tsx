import { FC, PropsWithChildren } from 'react';

import styles from './Inner.module.scss';

const Inner: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.inner}>{children}</div>;
};

export default Inner;
