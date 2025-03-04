import { Link, useNavigate } from 'react-router-dom';

import styles from './login.module.scss';

import Logo from '@/shared/assets/icon_logo.svg?react';
import ArrowLeft from '@/shared/assets/icons/icon_arrow-left.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Inner, Tabs, Typography, Wrapper } from '@/shared/ui';
import { WidgetLoginEmail, WidgetLoginPhone } from '@/widgets';

const Login = () => {
  const navigate = useNavigate();

  const tabs = [
    {
      label: 'Номер телефона',
      content: <WidgetLoginPhone />
    },
    {
      label: 'E-mail',
      content: <WidgetLoginEmail />
    }
  ];

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <div className={styles.loginWrapper}>
        <Inner>
          <div className={styles.login}>
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

export default Login;
