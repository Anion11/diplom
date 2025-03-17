import { FC } from 'react';
import clsx from 'clsx';

import { ISection } from '../model/ISection';

import styles from './Section.module.scss';

const Section: FC<ISection> = props => {
  const { children, className, id, mods } = props;
  return (
    <section
      id={id}
      className={clsx(
        styles.section,
        className && className,
        Array.isArray(mods)
          ? mods.map(mod => styles[`section_${mod}`]).join(' ')
          : mods && styles[`section_${mods}`]
      )}
    >
      {children}
    </section>
  );
};

export default Section;
