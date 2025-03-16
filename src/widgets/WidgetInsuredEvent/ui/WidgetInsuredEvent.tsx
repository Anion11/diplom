import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { IWidgetInsuredEvent } from '../model/IWidgetInsuredEvent';

import styles from './WidgetInsuredEvent.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Typography } from '@/shared/ui';

const WidgetInsuredEvent: FC<IWidgetInsuredEvent> = props => {
  const { className, title, descr, links } = props;

  return (
    <div className={clsx(styles.insured, className && className)}>
      <div className={styles.insured__head}>
        <Typography
          tag="h4"
          bold={700}
          type={ETypographyType.h4}
        >
          {title}
        </Typography>
      </div>
      <div className={styles.insured__descr}>
        <Typography type={ETypographyType.p1}>{descr}</Typography>
      </div>
      <div className={styles.insured__foot}>
        {links.map((item, index) => (
          <Link
            className={styles.insured__item}
            key={index}
            to={item.link}
          >
            <Typography type={ETypographyType.p1}>{item.title}</Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WidgetInsuredEvent;
