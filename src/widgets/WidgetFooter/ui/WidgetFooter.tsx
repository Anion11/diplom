import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './WidgetFooter.module.scss';

import Logo from '@/shared/assets/icon_logo.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, Typography } from '@/shared/ui';

const WidgetFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <Inner>
        <div className={styles.footer__top}>
          <Link
            className={styles.footer__logo}
            to={'/'}
          >
            <Logo />
          </Link>
          <div className={styles.footer__tel}>
            <a href="tel: 889603508485">
              <Typography type={ETypographyType.h4}>8 (960) 350-84-85</Typography>
            </a>
            <Typography type={ETypographyType.p2}>Телефон горячей линии</Typography>
          </div>
        </div>
        <div className={styles.footer__main}>
          <div className={styles.footer__col}>
            <Typography
              className={styles.footer__title}
              type={ETypographyType.h5}
            >
              Автомобили
            </Typography>
            <ul className={styles.footer__menu}>
              <li>
                <Link to={'/kasko'}>
                  <Typography type={ETypographyType.p1}>Квско</Typography>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__col}>
            <Typography
              className={styles.footer__title}
              type={ETypographyType.h5}
            >
              Имущество
            </Typography>
            <ul className={styles.footer__menu}>
              <li>
                <Link to={'/apartments-insurance'}>
                  <Typography type={ETypographyType.p1}>Страхование квартир</Typography>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__col}>
            <Typography
              className={styles.footer__title}
              type={ETypographyType.h5}
            >
              Здоровье
            </Typography>
            <ul className={styles.footer__menu}>
              <li>
                <Link to={'/antipincer-insurance'}>
                  <Typography type={ETypographyType.p1}>Страхование от укуса клеща</Typography>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bot}>
          <Typography type={ETypographyType.p1}>
            © 2024-{new Date().getFullYear()} Страховая компания &laquo;InsureFlow&raquo;.
            Все&nbsp;права защищены.
          </Typography>
        </div>
      </Inner>
    </footer>
  );
};

export default WidgetFooter;
