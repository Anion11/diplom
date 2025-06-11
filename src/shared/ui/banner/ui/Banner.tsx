import { FC } from 'react';
import clsx from 'clsx';

import { EButtonTypes } from '../../button/model/IButton';
import { IBanner } from '../model/IBanner';

import style from './Banner.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Inner, Typography } from '@/shared/ui';

const Banner: FC<IBanner> = props => {
  const { title, descr, mods, image, btnLink, btnText } = props;

  return (
    <div
      className={clsx(
        style.banner,
        Array.isArray(mods)
          ? mods.map(mod => style[`banner_${mod}`]).join(' ')
          : mods && style[`banner_${mods}`]
      )}
    >
      <Inner className={style.banner__inner}>
        <div className={style.banner__body}>
          <div className={style.banner__content}>
            <div className={style.banner__text}>
              <Typography
                tag="h1"
                type={ETypographyType.h1}
                bold={700}
              >
                {title}
              </Typography>
              <Typography
                tag="p"
                type={ETypographyType.h5}
              >
                {descr}
              </Typography>
            </div>
            {btnText && (
              <Button
                className={style.banner__button}
                text={btnText}
                mods={['white', 'pd-s']}
                link={btnLink}
                type={EButtonTypes.LINK}
              />
            )}
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
