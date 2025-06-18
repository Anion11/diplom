import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './WidgetAuthBanner.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

interface IWidgetAuthBannerProps {
  isAuth?: boolean;
}

const WidgetAuthBanner: FC<IWidgetAuthBannerProps> = ({ isAuth }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__text}>
          <Typography
            type={ETypographyType.h1}
            bold={700}
          >
            Требуется подтверждение личности!
          </Typography>
          <div className={styles.container__descr}>
            <Typography type={ETypographyType.p1}>
              Для оформления полиса требуется авторизироваться в&nbsp;свем личном кабинете
              и&nbsp;подтвердить личность с помощью паспортных данных в разделе <b>«Документы»</b>.
              Если у&nbsp;вас ещё нет личного кабинета, вы&nbsp;можете зарегистрироваться{' '}
              <Link to={'/registration'}>по ссылке</Link>.
            </Typography>
            <Typography type={ETypographyType.p1}>
              Без подтверждённой личности оформление заявок невозможно.
            </Typography>
          </div>
        </div>
        <Button
          className={styles.container__btn}
          text={isAuth ? 'Личный кабинет' : 'Войти'}
          mods={['white', 'long', 'mob-w100']}
          type={EButtonTypes.LINK}
          link={isAuth ? '/lk?tab=1' : '/login'}
        />
      </div>
      <div className={styles.container__image}>
        <img
          src={''}
          alt=""
        />
      </div>
    </div>
  );
};

export default WidgetAuthBanner;
