import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import NavbarModal from './navbar-modal/ui/NavbarModal';

import styles from './WidgetNavbar.module.scss';

import ContactsIcon from '@/shared/assets/icons/icon_contacts.svg?react';
import HelpIcon from '@/shared/assets/icons/icon_help.svg?react';
import HomeIcon from '@/shared/assets/icons/icon_home_outline.svg?react';
import UserIcon from '@/shared/assets/icons/icon_user.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Typography } from '@/shared/ui';
import BottomSheet from '@/shared/ui/bottom-sheet/ui/BottomSheet';

const WidgetNavbar: FC = () => {
  const location = useLocation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isMenuClose, setMenuClose] = useState(false);
  const { user } = useAuthContext();

  const handleMenuClick = () => {
    setMenuClose(false);
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const handleMenuClose = () => {
    setMenuClose(true);
    setTimeout(() => {
      setMenuVisible(false);
    }, 300);
  };

  useEffect(() => {
    handleMenuClose();
  }, [location]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const handleResize = () => {
      if (!mediaQuery.matches) {
        handleMenuClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__item}>
            <Link
              to={'/'}
              className={styles.navbar__button}
            >
              <div className={styles.navbar__icon}>
                <HomeIcon />
              </div>
              <Typography type={ETypographyType.p4}>Главная</Typography>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              to={'/contacts'}
              className={styles.navbar__button}
            >
              <div className={styles.navbar__icon}>
                <ContactsIcon />
              </div>
              <Typography type={ETypographyType.p4}>Контакты</Typography>
            </Link>
          </li>
          <li
            className={clsx(
              styles.navbar__item,
              styles.navbar__item_menu,
              isMenuVisible && !isMenuClose && styles.navbar__item_active
            )}
          >
            <button onClick={isMenuVisible ? handleMenuClose : handleMenuClick}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
          <li className={styles.navbar__item}>
            <a
              href="tel: 8 (800) 555-35-35"
              className={styles.navbar__button}
            >
              <div className={styles.navbar__icon}>
                <HelpIcon />
              </div>
              <Typography type={ETypographyType.p4}>Помощь</Typography>
            </a>
          </li>
          <li className={styles.navbar__item}>
            {user ? (
              <Link
                to={'/lk'}
                className={styles.navbar__button}
              >
                <div className={styles.navbar__icon}>
                  <UserIcon />
                </div>
                <Typography type={ETypographyType.p4}>Профиль</Typography>
              </Link>
            ) : (
              <Link
                to={'/login'}
                className={styles.navbar__button}
              >
                <div className={styles.navbar__icon}>
                  <UserIcon />
                </div>
                <Typography type={ETypographyType.p4}>Войти</Typography>
              </Link>
            )}
          </li>
        </ul>
      </nav>
      {isMenuVisible && (
        <BottomSheet
          onClose={handleCloseMenu}
          className={styles.navbar__modal}
          isMenuClose={isMenuClose}
          setMenuClose={setMenuClose}
          contentClassName={styles.navbar__modalContent}
        >
          <NavbarModal />
        </BottomSheet>
      )}
    </>
  );
};

export default WidgetNavbar;
