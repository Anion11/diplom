import { FC } from 'react';

import styles from './style.module.scss';

import bannerAboutImage from '@/shared/assets/images/banner_about.png';
import { Banner, Inner } from '@/shared/ui';
import { WidgetBannerSwiper } from '@/widgets';

const Main: FC = () => {
  return (
    <>
      <div className={styles.main}>
        <WidgetBannerSwiper>
          <Banner
            title="О компании"
            descr="InsureFlow — это современная страховая компания, которая предлагает надежные и индивидуальные решения для защиты вашего здоровья и имущества. Мы работаем, чтобы сделать страхование простым, понятным и доступным для каждого."
            btnText="Подробнее"
            btnLink="/about#history"
            image={bannerAboutImage}
          />
        </WidgetBannerSwiper>
        <Inner></Inner>
      </div>
    </>
  );
};

export default Main;
