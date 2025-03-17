import { FC } from 'react';
import clsx from 'clsx';

import { IBanner } from '../model/IBanner';

import style from './Banner.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, Typography } from '@/shared/ui';

const Banner: FC<IBanner> = props => {
  const { title, descr, mods, image } = props;

  return (
    <div
      className={clsx(
        style.banner,
        Array.isArray(mods)
          ? mods.map(mod => style[`banner_${mod}`]).join(' ')
          : mods && style[`banner_${mods}`]
      )}
    >
      <Inner>
        <div className={style.banner__body}>
          <div className={style.banner__content}>
            <Typography
              tag="h1"
              type={ETypographyType.h1}
              bold={700}
            >
              {title}
            </Typography>
            <Typography type={ETypographyType.p1}>{descr}</Typography>
          </div>
          <div className={style.banner__image}>
            <img
              src={image}
              alt=""
            />
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default Banner;
