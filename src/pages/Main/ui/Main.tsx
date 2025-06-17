import { FC } from 'react';

import bannerAboutImage from '@/shared/assets/images/banner_about.png';
import bannerInsuranseAntipincerImage from '@/shared/assets/images/banner_antipincer.png';
import bannerApartmentsImage from '@/shared/assets/images/banner_insurance-apartments.png';
import bannerKaskoImage from '@/shared/assets/images/banner_kasko.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Banner, Inner, Section, SectionHead, Typography } from '@/shared/ui';
import {
  WidgetBannerSwiper,
  WidgetInsuranceTypes,
  WidgetMainContactsBanner,
  WidgetMainPartners,
  WidgetMainUseful
} from '@/widgets';

const Main: FC = () => {
  return (
    <>
      <Section>
        <WidgetBannerSwiper>
          <Banner
            title="КАСКО – защита без&nbsp;компромиссов"
            descr="Корпоративное страхование автотранспорта по&nbsp;программе КАСКО с&nbsp;индивидуальным расчетом тарифов и&nbsp;гибкими условиями страхования."
            btnText="Подробнее"
            btnLink="/kasko"
            image={bannerKaskoImage}
          />
          <Banner
            title="Страхование от укуса&nbsp;клеща"
            descr="Финансовая защита на случай укуса клеща — покрытие расходов на медицинскую помощь, диагностику и лечение. Будьте уверены в безопасности своей семьи в сезон повышенного риска!"
            btnText="Подробнее"
            btnLink="/antipincer-insurance"
            image={bannerInsuranseAntipincerImage}
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

      <Section>
        <Inner>
          <WidgetMainContactsBanner />
        </Inner>
      </Section>

      <Section>
        <SectionHead>
          <Inner>
            <Typography
              tag="h1"
              bold={700}
              type={ETypographyType.h1}
            >
              Партнеры
            </Typography>
          </Inner>
        </SectionHead>
        <WidgetMainPartners />
      </Section>

      <Section>
        <Inner>
          <SectionHead>
            <Typography
              tag="h1"
              bold={700}
              type={ETypographyType.h1}
            >
              Будет полезно
            </Typography>
          </SectionHead>
          <WidgetMainUseful />
        </Inner>
      </Section>
    </>
  );
};

export default Main;
