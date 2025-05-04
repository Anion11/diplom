import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { InsuranceTypesData } from '../model/InsuranceTypesData';

import styles from './WidgetInsuranceTypes.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Typography } from '@/shared/ui';

const WidgetInsuranceTypes: FC = () => {
  return (
    <div className={styles.container}>
      {InsuranceTypesData.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className={clsx(styles.container__item, item.mods && styles[item.mods])}
        >
          <div className={styles.container__image}>
            <img
              src={item.image}
              alt=""
            />
          </div>
          <div className={styles.container__text}>
            <Typography
              tag="h4"
              type={ETypographyType.h4}
              bold={700}
            >
              {item.title}
            </Typography>
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              {item.descr}
            </Typography>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WidgetInsuranceTypes;
