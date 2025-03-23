import { Link, useNavigate } from 'react-router-dom';

import styles from './Registration.module.scss';

import Logo from '@/shared/assets/icon_logo.svg?react';
import ArrowLeft from '@/shared/assets/icons/icon_arrow-left.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Inner, Typography, Wrapper } from '@/shared/ui';
import { WidgetRegistration } from '@/widgets';

const Registration = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <div className={styles.regWrapper}>
        <Inner>
          <div className={styles.reg}>
            <div className={styles.reg__body}>
              <Link
                className={styles.reg__logo}
                to={'/'}
              >
                <Logo />
              </Link>
              <Typography
                tag="h1"
                bold={700}
                type={ETypographyType.h1}
                className={styles.reg__title}
              >
                Регистрация в личном кабинете
              </Typography>
              <div className={styles.reg__form}>
                <WidgetRegistration />
              </div>
              <Button
                mods={['outline']}
                text="Вернуться назад"
                onClick={handleClickBack}
                leftIcon={<ArrowLeft />}
              />
            </div>
          </div>
        </Inner>
      </div>
    </Wrapper>
  );
};

export default Registration;
