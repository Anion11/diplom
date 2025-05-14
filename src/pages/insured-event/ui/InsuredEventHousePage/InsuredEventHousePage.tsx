import { FC } from 'react';

import HouseDocuments from './tabs/ui/HouseDocuments/HouseDocuments';
import HouseWhatDo from './tabs/ui/HouseWhatDo/HouseWhatDo';

import styles from './InsuredEventHousePage.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, Section, SectionHead, Tabs, Typography } from '@/shared/ui';

const InsuredEventHousePage: FC = () => {
  const tabs = [
    {
      label: 'Что делать',
      content: <HouseWhatDo />
    },
    {
      label: 'Документы',
      content: <HouseDocuments />
    }
  ];

  return (
    <Section>
      <Inner>
        <SectionHead>
          <Typography
            tag="h1"
            type={ETypographyType.h1}
            bold={700}
          >
            Страховой случай по&nbsp;имуществу
          </Typography>
        </SectionHead>
        <div className={styles.insured}>
          <div className={styles.insured__tabs}>
            <Tabs
              tabs={tabs}
              mods="grey"
            />
          </div>
        </div>
      </Inner>
    </Section>
  );
};

export default InsuredEventHousePage;
