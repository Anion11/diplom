import { FC } from 'react';

import { insuredEventData } from './model/InsuredEventData';

import styles from './InsuredEventParentPage.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, Section, SectionHead, Typography } from '@/shared/ui';
import { WidgetInsuredEvent } from '@/widgets';

const InsuredEventParentPage: FC = () => {
  return (
    <Section>
      <Inner>
        <SectionHead>
          <Typography
            tag="h1"
            type={ETypographyType.h1}
            bold={700}
          >
            Что делать при наступлении страхового случая
          </Typography>
        </SectionHead>
        <div className={styles.insured__items}>
          {insuredEventData.map((item, index) => (
            <WidgetInsuredEvent
              key={index}
              {...item}
            />
          ))}
        </div>
      </Inner>
    </Section>
  );
};

export default InsuredEventParentPage;
