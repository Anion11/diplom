import { FC } from 'react';
import clsx from 'clsx';

import { ISection } from '../model/ISection';

import styles from './style.module.scss';

const Section: FC<ISection> = props => {
  const { children, className, id } = props;
  return (
    <section
      id={id}
      className={clsx(styles.section, className && className)}
    >
      {children}
    </section>
  );
};

export default Section;
