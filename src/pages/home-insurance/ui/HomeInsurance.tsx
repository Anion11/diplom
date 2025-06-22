import { FC, useState } from 'react';
import clsx from 'clsx';

import styles from './HomeInsurance.module.scss';

import { HouseApplicationForm } from '@/features';
import bannerApartmentsImage from '@/shared/assets/images/banner_insurance-apartments.png';
import EDocuments from '@/shared/config/enums/EDocuments';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Banner, Button, Inner, Input, Section, SectionHead, Typography } from '@/shared/ui';
import RangeSlider from '@/shared/ui/range-slider/ui/range-slider';
import { WidgetAuthBanner, WidgetHomeInsuranceBanner, WidgetSteps } from '@/widgets';

const HomeInsurance: FC = () => {
  const { user } = useAuthContext();

  const [state, setState] = useState({
    min: 200,
    max: 600
  });

  function handleRangeChange(value: any) {
    setState({
      min: value[0],
      max: value[1]
    });
  }
  function handleMaxChange(max: number) {
    setState({
      ...state,
      max: max || state.min
    });
  }
  function handleMinChange(min: number) {
    setState({
      ...state,
      min: min || 0
    });
  }

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
          {user?.person.documents.some(
            doc => doc.type === EDocuments.PASSPORT && doc.isApproved
          ) ? (
            <WidgetAuthBanner isAuth={Boolean(user)} />
          ) : (
            <HouseApplicationForm />
          )}
        </Inner>
      </Section>
    </>
  );
};

export default HomeInsurance;
