import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import {
  HeaderDropdownAutoData,
  HeaderDropdownHealthData,
  HeaderDropdownPropertyData
} from '../model/HeaderMenuData';

import styles from './WidgetHeader.module.scss';

import Logo from '@/shared/assets/icon_logo.svg?react';
import InsuranceShield from '@/shared/assets/icons/icon_insurance-shield.svg?react';
import SmartPhone from '@/shared/assets/icons/icon_smartphone.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext.ts';
import { Button, HeaderDropdown, Inner, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/button/model/IButton';

const WidgetHeader: FC = () => {
  const { user } = useAuthContext();
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
              <Link
                to={'/insured-event'}
                className={clsx(styles.header__insurance, styles.header__insurance_mob)}
              >
                <InsuranceShield />
                <Typography type={ETypographyType.h5}>Страховой случай</Typography>
              </Link>
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
                    mods={['empty', 'pd-xs', 'hover_filled']}
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
              <li className={styles.header__botItem}>
                <div className={styles.header__botText}>
                  <Typography type={ETypographyType.h5}>Автомобили</Typography>
                </div>
                <HeaderDropdown
                  columns={HeaderDropdownAutoData}
                  className={styles.header__dropdown}
                />
              </li>
              <li className={clsx(styles.header__botItem)}>
                <div className={styles.header__botText}>
                  <Typography type={ETypographyType.h5}>Имущество</Typography>
                </div>
                <HeaderDropdown
                  columns={HeaderDropdownPropertyData}
                  className={styles.header__dropdown}
                />
              </li>
              <li className={clsx(styles.header__botItem)}>
                <div className={styles.header__botText}>
                  <Typography type={ETypographyType.h5}>Здоровье</Typography>
                </div>
                <HeaderDropdown
                  columns={HeaderDropdownHealthData}
                  className={styles.header__dropdown}
                />
              </li>
            </ul>
            <Link
              to={'/insured-event'}
              className={styles.header__insurance}
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

export default WidgetHeader;
