import { FC } from 'react';

import styles from './WidgetHomeInsuranceBanner.module.scss';

import WidgetHomeInsuranceBannerImage from '@/shared/assets/images/widget_home_insurance_banner.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Typography } from '@/shared/ui';

const WidgetHomeInsuranceBanner: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__content}>
        <div className={styles.contacts__text}>
          <Typography
            type={ETypographyType.h2}
            bold={700}
          >
            Надёжное страхование вашей квартиры — просто и удобно
          </Typography>
          <Typography
            type={ETypographyType.h5}
            className={styles.contacts__text}
          >
            Мы&nbsp;предлагаем комплексное страхование квартир, которое покрывает все основные
            риски. Наша задача&nbsp;&mdash; защитить ваше имущество и&nbsp;дать уверенность
            в&nbsp;завтрашнем дне.
          </Typography>
        </div>
      </div>
      <div className={styles.contacts__image}>
        <img
          src={WidgetHomeInsuranceBannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default WidgetHomeInsuranceBanner;
