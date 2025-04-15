import { FC } from 'react';

import styles from './style.module.scss';

import bannerAboutImage from '@/shared/assets/images/banner_about.png';
import bannerInsuranseAccidentImage from '@/shared/assets/images/banner_insuranse-accident.png';
import bannerOsageImage from '@/shared/assets/images/banner_osago.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Banner, Inner, Section, SectionHead, Typography } from '@/shared/ui';
import { WidgetBannerSwiper, WidgetInsuranceTypes } from '@/widgets';

const Main: FC = () => {
  return (
    <>
      <div className={styles.main}>
        <Section>
          <WidgetBannerSwiper>
            <Banner
              title="Страхование от несчастных&nbsp;случаев"
              descr="Надёжная защита для вас и вашей семьи в любой непредвиденной ситуации — чтобы&nbsp;ничто не могло нарушить ваше спокойствие!"
              btnText="Подробнее"
              btnLink="/accident-insurance"
              image={bannerInsuranseAccidentImage}
            />
            <Banner
              title="Полис ОСАГО онлайн"
              descr="Оформите полис в электронном формате для постоянного доступа с&nbsp;вашего&nbsp;устройства."
              btnText="Подробнее"
              btnLink="/osago"
              image={bannerOsageImage}
            />
            <Banner
              title="О компании"
              descr="InsureFlow — это современная страховая компания, которая предлагает надежные и индивидуальные решения для защиты вашего здоровья и имущества. Мы работаем, чтобы сделать страхование простым, понятным и доступным для каждого."
              btnText="Подробнее"
              btnLink="/about#history"
              image={bannerAboutImage}
            />
          </WidgetBannerSwiper>
        </Section>
        <Section>
          <Inner>
            <SectionHead>
              <Typography
                tag="h1"
                bold={700}
                type={ETypographyType.h1}
              >
                Виды страхования
              </Typography>
            </SectionHead>
            <WidgetInsuranceTypes />
          </Inner>
        </Section>
      </div>
    </>
  );
};

export default Main;
