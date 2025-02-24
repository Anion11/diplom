import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Header.module.scss';

import Logo from '@/shared/assets/icon_logo.svg?react';
import InsuranceShield from '@/shared/assets/icons/icon_insurance-shield.svg?react';
import SmartPhone from '@/shared/assets/icons/icon_smartphone.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';
import { Button, Inner, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/Button/model/IButton';

const Header = () => {
  // const navigate = useNavigate();
  const { user } = useAuthContext(); // logout
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__topWrapper}>
        <Inner>
          <div className={styles.header__top}>
            <Link
              className={styles.header__logo}
              to={'/'}
            >
              <Logo />
            </Link>
            <ul className={styles.header__topMenu}>
              <li
                className={clsx(styles.header__topItem, {
                  [styles.header__topItem_active]: pathname === '/'
                })}
              >
                <Link to={'/'}>
                  <Typography type={ETypographyType.p1}>Главная</Typography>
                </Link>
              </li>
              <li
                className={clsx(styles.header__topItem, {
                  [styles.header__topItem_active]: pathname === '/about'
                })}
              >
                <Link to={'/about'}>
                  <Typography type={ETypographyType.p1}>О компании</Typography>
                </Link>
              </li>
              <li
                className={clsx(styles.header__topItem, {
                  [styles.header__topItem_active]: pathname === '/contacts'
                })}
              >
                <Link to={'/contacts'}>
                  <Typography type={ETypographyType.p1}>Контакты</Typography>
                </Link>
              </li>
              <li
                className={clsx(styles.header__topItem, {
                  [styles.header__topItem_active]: pathname === '/faq'
                })}
              >
                <Link to={'/faq'}>
                  <Typography type={ETypographyType.p1}>Часто задаваемые вопросы</Typography>
                </Link>
              </li>
            </ul>
            <div className={styles.header__topRight}>
              <a
                href="tel:8 (800) 555-35-35"
                className={styles.header__tel}
              >
                <SmartPhone />
                <Typography
                  type={ETypographyType.h5}
                  bold={700}
                >
                  8 (800) 555-35-35
                </Typography>
              </a>
              <div className={styles.header__login}>
                {user ? (
                  <Button
                    mods={['empty', 'pd-xs']}
                    text="Личный кабинет"
                    type={EButtonTypes.LINK}
                    link="/lk"
                  />
                ) : (
                  <Button
                    mods={['empty', 'pd-xs']}
                    text="Войти"
                    type={EButtonTypes.LINK}
                    link="/login"
                  />
                )}
              </div>
            </div>
          </div>
        </Inner>
      </div>

      <div className={styles.header__botWrapper}>
        <Inner>
          <div className={styles.header__bot}>
            <ul className={styles.header__botMenu}>
              <li className={clsx(styles.header__botItem)}>
                <Link to={'/'}>
                  <Typography type={ETypographyType.h5}>Автомобили</Typography>
                </Link>
              </li>
              <li className={clsx(styles.header__botItem)}>
                <Link to={'/'}>
                  <Typography type={ETypographyType.h5}>Имущество</Typography>
                </Link>
              </li>
              <li className={clsx(styles.header__botItem)}>
                <Link to={'/'}>
                  <Typography type={ETypographyType.h5}>Здоровье</Typography>
                </Link>
              </li>
              <li className={clsx(styles.header__botItem)}>
                <Link to={'/'}>
                  <Typography type={ETypographyType.h5}>Путешествия</Typography>
                </Link>
              </li>
            </ul>
            <Link
              to={'/insured-event'}
              className={styles.header__botInsurance}
            >
              <InsuranceShield />
              <Typography type={ETypographyType.h5}>Страховой случай</Typography>
            </Link>
          </div>
        </Inner>
      </div>
    </header>
  );
};

export default Header;
