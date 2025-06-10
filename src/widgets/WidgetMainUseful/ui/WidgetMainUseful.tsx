import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './WidgetMainUseful.module.scss';

import UsefullFaq from '@/shared/assets/images/useful/useful_faq.png';
import UsefullHotline from '@/shared/assets/images/useful/useful_hotline.png';
import UsefullInsurance from '@/shared/assets/images/useful/useful_insurance.png';
import UsefullLk from '@/shared/assets/images/useful/useful_lk.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Button, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

const WidgetMainUseful: FC = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.usefull}>
      <div
        className={clsx(
          styles.usefull__item,
          styles.usefull__item_rowspan2,
          styles.usefull__item_blue
        )}
      >
        <div className={styles.usefull__content}>
          <Typography
            type={ETypographyType.h4}
            bold={700}
          >
            Личный кабинет
          </Typography>
          <Typography type={ETypographyType.p1}>
            Все договоры в одном месте – быстро и удобно
          </Typography>
        </div>
        <Button
          mods={['white', 'pd-s']}
          text={user ? 'Профиль' : 'Войти'}
          type={EButtonTypes.LINK}
          link={user ? '/lk' : '/login'}
          className={styles.usefull__btn}
        />
        <div className={styles.usefull__img}>
          <img
            src={UsefullLk}
            alt=""
          />
        </div>
      </div>
      <div className={clsx(styles.usefull__item)}>
        <div className={styles.usefull__content}>
          <Typography
            type={ETypographyType.h4}
            bold={700}
          >
            Консультация специалиста
          </Typography>
          <Typography type={ETypographyType.p1}>Свяжитесь с экспертом в один клик</Typography>
        </div>
        <a
          className={styles.usefull__link}
          href="tel:89603508485"
        >
          <Typography
            type={ETypographyType.p1}
            bold={700}
          >
            Связаться
          </Typography>
        </a>
        <div className={styles.usefull__img}>
          <img
            src={UsefullHotline}
            alt=""
          />
        </div>
      </div>
      <div className={clsx(styles.usefull__item)}>
        <div className={styles.usefull__content}>
          <Typography
            type={ETypographyType.h4}
            bold={700}
          >
            Страховой случай
          </Typography>
          <Typography type={ETypographyType.p1}>
            Что делать, если произошло страховое событие
          </Typography>
        </div>
        <Link
          to={'/insured-event'}
          className={styles.usefull__link}
        >
          <Typography
            type={ETypographyType.p1}
            bold={700}
          >
            Выбрать событие
          </Typography>
        </Link>
        <div className={styles.usefull__img}>
          <img
            src={UsefullInsurance}
            alt=""
          />
        </div>
      </div>
      <div className={clsx(styles.usefull__item, styles.usefull__item_colspan2)}>
        <div className={styles.usefull__content}>
          <Typography
            type={ETypographyType.h4}
            bold={700}
          >
            Часто задаваемые вопросы
          </Typography>
          <Typography type={ETypographyType.p1}>
            Ответы на частые вопросы – быстро и без лишних поисков
          </Typography>
        </div>
        <Link
          to={'/faq'}
          className={styles.usefull__link}
        >
          <Typography
            type={ETypographyType.p1}
            bold={700}
          >
            Перейти
          </Typography>
        </Link>
        <div className={styles.usefull__img}>
          <img
            src={UsefullFaq}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetMainUseful;
