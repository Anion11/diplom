import { FC, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import clsx from 'clsx';

import { IAccordion } from '../model/IAccordion';

import style from './Accordion.module.scss';

import ArrowIcon from '@/shared/assets/icons/icon_arrow-up.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Typography } from '@/shared/ui';

const Accordion: FC<IAccordion> = ({ title, children, mods }) => {
  const [height, setHeight] = useState<string | number>(0);

  return (
    <div
      className={clsx(
        style.accordion,
        Array.isArray(mods)
          ? mods.map(mod => style[`accordion_${mod}`]).join(' ')
          : mods && style[`accordion_${mods}`]
      )}
    >
      <div
        className={style.accordion__button}
        aria-expanded={height !== 0}
        aria-controls="example-panel"
        onClick={() => setHeight(height === 0 ? 'auto' : 0)}
      >
        <Typography
          type={ETypographyType.h5}
          bold={700}
        >
          {title}
        </Typography>
        <ArrowIcon
          style={{
            transform: height === 0 ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
          className={style.accordion__arrow}
        />
      </div>
      <AnimateHeight
        id="example-panel"
        duration={300}
        height={height as number}
      >
        <div className={style.accordion__panel}>{children}</div>
      </AnimateHeight>
    </div>
  );
};

export default Accordion;
