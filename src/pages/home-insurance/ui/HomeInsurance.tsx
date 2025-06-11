import { FC } from 'react';

import styles from './HomeInsurance.module.scss';

import bannerHouseImage from '@/shared/assets/images/banner_insurance-house.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Banner, Inner, Section, SectionHead, Typography } from '@/shared/ui';
import { WidgetHomeInsuranceBanner, WidgetSteps } from '@/widgets';

const HomeInsurance: FC = () => {
  return (
    <>
      <Section>
        <Banner
          title="Страхование домов"
          descr="Защитите свой дом от&nbsp;пожаров, стихии и&nbsp;других рисков. Полис&nbsp;страхования недвижимости с&nbsp;гарантией быстрого урегулирования убытков."
          image={bannerHouseImage}
        />
      </Section>
      <Section>
        <Inner>
          <WidgetHomeInsuranceBanner />
        </Inner>
      </Section>
      <Section>
        <Inner>
          <SectionHead className={styles.stepsHead}>
            <Typography
              tag="h1"
              type={ETypographyType.h1}
              bold={700}
            >
              Что делать при наступлении страхового случая
            </Typography>
          </SectionHead>
          <WidgetSteps />
        </Inner>
      </Section>
    </>
  );
};

export default HomeInsurance;
