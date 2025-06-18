import { FC } from 'react';

import styles from './HomeInsurance.module.scss';

import bannerApartmentsImage from '@/shared/assets/images/banner_insurance-apartments.png';
import EDocuments from '@/shared/config/enums/EDocuments';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Banner, Inner, Section, SectionHead, Typography } from '@/shared/ui';
import { WidgetAuthBanner, WidgetHomeInsuranceBanner, WidgetSteps } from '@/widgets';

const HomeInsurance: FC = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Section>
        <Banner
          title="Страхование квартир"
          descr="Страхование квартиры – финансовая защита вашей недвижимости. Полное покрытие рисков: от&nbsp;повреждений до&nbsp;гражданской ответственности перед третьими лицами."
          image={bannerApartmentsImage}
          btnLink="#form"
          btnText="Оформить"
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
      <Section id="form">
        <Inner>
          {!user?.person.documents.some(
            doc => doc.type === EDocuments.PASSPORT && doc.isApproved
          ) ? (
            <WidgetAuthBanner isAuth={Boolean(user)} />
          ) : (
            <SectionHead className={styles.stepsHead}>
              <Typography
                tag="h1"
                type={ETypographyType.h1}
                bold={700}
              >
                Оформление полиса
              </Typography>
            </SectionHead>
          )}
        </Inner>
      </Section>
    </>
  );
};

export default HomeInsurance;
