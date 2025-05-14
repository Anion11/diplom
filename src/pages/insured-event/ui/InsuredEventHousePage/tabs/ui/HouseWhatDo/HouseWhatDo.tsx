import { FC } from 'react';

import styles from './HouseWhatDo.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { List, Typography } from '@/shared/ui';

const HouseWhatDo: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__head}>
        <Typography
          tag="h4"
          type={ETypographyType.h4}
          bold={700}
        >
          Порядок действий при наступлении страхового случая
        </Typography>
      </div>
      <div className={styles.container__body}>
        <List
          isNumeric
          isPrimary
        >
          <li>
            <Typography type={ETypographyType.p1}>
              Немедленно вызовите соответствующие экстренные службы:
            </Typography>
            <List
              isPrimary
              className={styles.container__listInner}
            >
              <li>
                <Typography type={ETypographyType.p1}>
                  <strong>Пожар, наводнение:</strong> МЧС России (
                  <a
                    className={styles.container__link}
                    href="tel:112"
                  >
                    112
                  </a>{' '}
                  или{' '}
                  <a
                    className={styles.container__link}
                    href="tel:101"
                  >
                    101
                  </a>
                  )
                </Typography>
              </li>
              <li>
                <Typography type={ETypographyType.p1}>
                  <strong>Затопление, аварии коммуникаций:</strong> Аварийную службу ЖКХ/ТСЖ
                </Typography>
              </li>
              <li>
                <Typography type={ETypographyType.p1}>
                  <strong>Ураган, землетрясение:</strong> Местное подразделение Росгидромета
                </Typography>
              </li>
              <li>
                <Typography type={ETypographyType.p1}>
                  <strong>Кража, вандализм:</strong> Полицию (
                  <a
                    className={styles.container__link}
                    href="tel:102"
                  >
                    102
                  </a>{' '}
                  или{' '}
                  <a
                    className={styles.container__link}
                    href="tel:112"
                  >
                    112
                  </a>
                  )
                </Typography>
              </li>
              <li>
                <Typography type={ETypographyType.p1}>
                  <strong>ДТП на территории:</strong> ГИБДД (
                  <a
                    className={styles.container__link}
                    href="tel:102"
                  >
                    102
                  </a>{' '}
                  или{' '}
                  <a
                    className={styles.container__link}
                    href="tel:112"
                  >
                    112
                  </a>
                  )
                </Typography>
              </li>
            </List>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              При отсутствии угрозы жизни и здоровью, предпримите разумные меры для предотвращения
              дальнейшего повреждения застрахованного имущества
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              В кратчайшие сроки свяжитетесь с представителем страховой компании по круглосуточному
              телефону{' '}
              <a
                className={styles.container__link}
                href="tel:89603508485"
              >
                8&nbsp;(960)&nbsp;350&#8209;84&#8209;85
              </a>{' '}
              и сообщите о произошедшем страховом случае
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              Сохраните обстановку на месте происшествия до осмотра представителем страховой
              компании. Воздержитесь от ремонтных работ и изменений на месте события, за исключением
              действий, необходимых для предотвращения увеличения ущерба
            </Typography>
          </li>
        </List>
      </div>
    </div>
  );
};

export default HouseWhatDo;
