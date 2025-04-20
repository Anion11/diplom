import { FC } from 'react';

import styles from './style.module.scss';

import bannerAboutImage from '@/shared/assets/images/banner_about.png';
import bannerApartmentsImage from '@/shared/assets/images/banner_insurance-apartments.png';
import bannerHouseImage from '@/shared/assets/images/banner_insurance-house.png';
import bannerInsuranseAccidentImage from '@/shared/assets/images/banner_insuranse-accident.png';
import bannerKaskoImage from '@/shared/assets/images/banner_kasko.png';
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
              title="Полис ОСАГО онлайн"
              descr="Оформите полис в&nbsp;электронном формате для&nbsp;постоянного доступа с&nbsp;вашего устройства в&nbsp;личном кабинете."
              btnText="Подробнее"
              btnLink="/osago"
              image={bannerOsageImage}
            />
            <Banner
              title="КАСКО – защита без&nbsp;компромиссов"
              descr="Корпоративное страхование автотранспорта по&nbsp;программе КАСКО с&nbsp;индивидуальным расчетом тарифов и&nbsp;гибкими условиями страхования."
              btnText="Подробнее"
              btnLink="/kasko"
              image={bannerKaskoImage}
            />
            <Banner
              title="Страхование от несчастных&nbsp;случаев"
              descr="Надёжная защита для вас и&nbsp;вашей семьи в&nbsp;любой непредвиденной ситуации — чтобы&nbsp;ничто не&nbsp;могло нарушить ваше спокойствие!"
              btnText="Подробнее"
              btnLink="/accident-insurance"
              image={bannerInsuranseAccidentImage}
            />
            <Banner
              title="Страхование домов"
              descr="Защитите свой дом от&nbsp;пожаров, стихии и&nbsp;других рисков. Полис&nbsp;страхования недвижимости с&nbsp;гарантией быстрого урегулирования убытков."
              btnText="Подробнее"
              btnLink="/houses-insurance"
              image={bannerHouseImage}
            />
            <Banner
              title="Страхование квартир"
              descr="Страхование квартиры – финансовая защита вашей недвижимости. Полное покрытие рисков: от&nbsp;повреждений до&nbsp;гражданской ответственности перед третьими лицами."
              btnText="Подробнее"
              btnLink="/apartments-insurance"
              image={bannerApartmentsImage}
            />
            <Banner
              title="О компании"
              descr="InsureFlow — это&nbsp;современная страховая компания, которая предлагает надежные и&nbsp;индивидуальные решения для&nbsp;защиты вашего здоровья и&nbsp;имущества. Мы&nbsp;работаем, чтобы сделать страхование простым, понятным и&nbsp;доступным для&nbsp;каждого."
              btnText="Подробнее"
              btnLink="/about"
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
