import { FC } from 'react';

import styles from './WidgetSteps.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Typography } from '@/shared/ui';

const WidgetSteps: FC = () => {
  return (
    <div className={styles.steps}>
      <div className={styles.steps__item}>
        <div className={styles.steps__head}>
          <div className={styles.steps__decor}>
            <div className={styles.steps__count}>
              <Typography type={ETypographyType.p1}>1</Typography>
            </div>
            <div className={styles.steps__line}></div>
          </div>
        </div>

        <div className={styles.steps__text}>
          <Typography type={ETypographyType.p1}>
            Принять доступные меры для уменьшения возможных убытков
          </Typography>
        </div>
      </div>
      <div className={styles.steps__item}>
        <div className={styles.steps__head}>
          <div className={styles.steps__decor}>
            <div className={styles.steps__count}>
              <Typography type={ETypographyType.p1}>2</Typography>
            </div>
            <div className={styles.steps__line}></div>
          </div>
        </div>
        <div className={styles.steps__text}>
          <Typography type={ETypographyType.p1}>
            Убедиться, что вашей жизни и здоровью ничего не угрожает
          </Typography>
        </div>
      </div>
      <div className={styles.steps__item}>
        <div className={styles.steps__head}>
          <div className={styles.steps__decor}>
            <div className={styles.steps__count}>
              <Typography type={ETypographyType.p1}>3</Typography>
            </div>
          </div>
        </div>
        <div className={styles.steps__text}>
          <Typography type={ETypographyType.p1}>
            Сообщить в страховую компанию о случившемся происшествии
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default WidgetSteps;
