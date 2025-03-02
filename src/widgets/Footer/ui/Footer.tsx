import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

import Logo from '@/shared/assets/icon_logo.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, Typography } from '@/shared/ui';

const Footer = () => {
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
            <a href="tel: 8 (800) 555-35-35">
              <Typography type={ETypographyType.h4}>8 (800) 555-35-35</Typography>
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
                <Link to={'/'}>
                  <Typography type={ETypographyType.p1}>ОСАГО</Typography>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
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
                <Link to={'/'}>
                  <Typography type={ETypographyType.p1}>Страхование квартир</Typography>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <Typography type={ETypographyType.p1}>Страхование домов</Typography>
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
                <Link to={'/'}>
                  <Typography type={ETypographyType.p1}>
                    Страхование от несчастных случаев
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  <Typography type={ETypographyType.p1}>Страхование спортсменов</Typography>
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

export default Footer;
