import { FC } from 'react';
import clsx from 'clsx';

import { ISectionHead } from '../model/ISectionHead';

import styles from './SectionHead.module.scss';

const SectionHead: FC<ISectionHead> = props => {
  const { children, sectionType, className } = props;
  return (
    <div
      className={clsx(
        styles.sectionHead,
        sectionType && styles[sectionType],
        className && className
      )}
    >
      {children}
    </div>
  );
};

export default SectionHead;
