import styles from './notfound.module.scss';

import NotFoundImage from '@/shared/assets/images/404.jpg';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Button, Inner, Section, Typography } from '@/shared/ui';
import { EButtonTypes } from '@/shared/ui/Button/model/IButton';

const NotFound = () => {
  return (
    <>
      <div className={styles.notFoundPage}>
        <Section>
          <Inner>
            <div className={styles.notFoundPage__content}>
              <div className={styles.notFoundPage__image}>
                <img
                  src={NotFoundImage}
                  alt="404 Not Found"
                />
              </div>
              <div className={styles.notFoundPage__text}>
                <Typography
                  tag="h1"
                  type={ETypographyType.h1}
                  bold={700}
                >
                  Ой! Кажется, мы потерялись...
                </Typography>
                <Typography
                  tag="h5"
                  type={ETypographyType.h5}
                  bold={400}
                >
                  Запрашиваемая страница не&nbsp;найдена. <br />
                  Пожалуйста, проверьте правильность введённого адреса
                  <span>или&nbsp;вернитесь на&nbsp;главную страницу</span>:
                </Typography>
              </div>
              <div className={styles.notFoundPage__button}>
                <Button
                  rightIcon="https://img.icons8.com/ios-filled/50/ffffff/home.png"
                  mods="mob-w100"
                  text="На главную"
                  type={EButtonTypes.LINK}
                />
              </div>
            </div>
          </Inner>
        </Section>
      </div>
    </>
  );
};

export default NotFound;
