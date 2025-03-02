import { Link } from 'react-router-dom';

import styles from './login.module.scss';

import Logo from '@/shared/assets/icon_logo.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, Typography, Wrapper } from '@/shared/ui';
import Tabs from '@/shared/ui/Tabs/ui/Tabs';
import { LoginFormEmail, LoginFormTel } from '@/widgets';

const Login = () => {
  const tabs = [
    {
      label: 'Номер телефона',
      content: <LoginFormTel />
    },
    {
      label: 'E-mail',
      content: <LoginFormEmail />
    }
  ];

  return (
    <Wrapper>
      <div className={styles.login}>
        <Inner>
          <div className={styles.login__body}>
            <Link
              className={styles.login__logo}
              to={'/'}
            >
              <Logo />
            </Link>
            <Typography
              tag="h1"
              bold={700}
              type={ETypographyType.h1}
            >
              Вход в личный кабинет
            </Typography>
            <div className={styles.login__tabs}>
              <Tabs tabs={tabs} />
            </div>
          </div>
        </Inner>
      </div>
    </Wrapper>
  );
};

export default Login;
