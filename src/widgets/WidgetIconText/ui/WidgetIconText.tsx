import { FC } from 'react';

import { IIconText } from '../model/IIconText';

import styles from './WidgetIconText.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Typography } from '@/shared/ui';

const WidgetIconText: FC<IIconText> = props => {
  const { icon, title, descr } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container__image}>{icon}</div>
      <div className={styles.container__content}>
        <Typography
          tag="h4"
          type={ETypographyType.h4}
          bold={700}
          className={styles.container__title}
        >
          {title}
        </Typography>
        <Typography
          tag="p"
          type={ETypographyType.p2}
          bold={700}
          className={styles.container__descr}
        >
          {descr}
        </Typography>
      </div>
    </div>
  );
};

export default WidgetIconText;
