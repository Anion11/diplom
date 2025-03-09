import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavbarModal.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Accordion, Inner, Typography } from '@/shared/ui';

const NavbarModal: FC = () => {
  return (
    <Inner>
      <div className={styles.content}>
        <div className={styles.content__insurance}>
          <div className={styles.content__insuranceItem}>
            <Accordion
              title="Автомобили"
              mods="transparent"
            >
              <div className={styles.content__insuranceLinks}>
                <Link to={'/osago'}>ОСАГО</Link>
                <Link to={'/kasko'}>Квско</Link>
              </div>
            </Accordion>
          </div>
          <div className={styles.content__insuranceItem}>
            <Accordion
              title="Здоровье"
              mods="transparent"
            >
              <Link to={'/accident-insurance'}>Страхование от несчастных случаев</Link>
              <Link to={'/athletes-insurance'}>Страхование спортсменов</Link>
            </Accordion>
          </div>
          <div className={styles.content__insuranceItem}>
            <Accordion
              title="Имущество"
              mods="transparent"
            >
              <Link to={'/apartments-insurance'}>Страхование квартир</Link>
              <Link to={'/houses-insurance'}>Страхование домов</Link>
            </Accordion>
          </div>
        </div>
        <div className={styles.content__links}>
          <Link
            className={styles.content__link}
            to={'/about'}
          >
            <Typography
              type={ETypographyType.h5}
              bold={700}
            >
              О компании
            </Typography>
          </Link>
          <Link
            className={styles.content__link}
            to={'/faq'}
          >
            <Typography
              type={ETypographyType.h5}
              bold={700}
            >
              Часто задаваемые вопросы
            </Typography>
          </Link>
        </div>
        <div className={styles.content__footer}>
          <a
            href="tel:8 (800) 555-35-35"
            className={styles.content__tel}
          >
            <Typography
              type={ETypographyType.h2}
              bold={700}
            >
              8 (800) 555-35-35
            </Typography>
          </a>
          <Typography
            type={ETypographyType.p1}
            bold={700}
          >
            Телефон горячей линии
          </Typography>
        </div>
      </div>
    </Inner>
  );
};

export default NavbarModal;
