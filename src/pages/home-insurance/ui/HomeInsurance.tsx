import { FC } from 'react';

import styles from './HomeInsurance.module.scss';

import bannerApartmentsImage from '@/shared/assets/images/banner_insurance-apartments.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Banner, Inner, Section, SectionHead, Typography } from '@/shared/ui';
import { WidgetHomeInsuranceBanner, WidgetSteps } from '@/widgets';

const HomeInsurance: FC = () => {
  return (
    <>
      <Section>
        <Banner
          title="Страхование квартир"
          descr="Страхование квартиры – финансовая защита вашей недвижимости. Полное покрытие рисков: от&nbsp;повреждений до&nbsp;гражданской ответственности перед третьими лицами."
          image={bannerApartmentsImage}
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
