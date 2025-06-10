import { FC } from 'react';

import styles from './WidgetMainContactsBanner.module.scss';

import WidgetMainContactsBannerImage from '@/shared/assets/images/widget_main_contacts_banner.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

const WidgetMainContactsBanner: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__content}>
        <div className={styles.contacts__text}>
          <Typography
            type={ETypographyType.h2}
            bold={700}
          >
            Мы рядом, когда нужна помощь
          </Typography>
          <Typography
            type={ETypographyType.h5}
            className={styles.contacts__text}
          >
            Ваш персональный менеджер готов помочь прямо сейчас! <br />
            Напишите сообщение или&nbsp;звоните — найдем&nbsp;решение вместе.
          </Typography>
        </div>
        <Button
          type={EButtonTypes.LINK}
          mods={['mob-w100', 'pd-s', 'empty', 'hover_filled']}
          link="/contacts"
          text="Подробнее"
          className={styles.contacts__btn}
        />
      </div>
      <div className={styles.contacts__image}>
        <img
          src={WidgetMainContactsBannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default WidgetMainContactsBanner;
