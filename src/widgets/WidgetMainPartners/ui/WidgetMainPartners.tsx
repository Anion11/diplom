import { FC } from 'react';

import styles from './WidgetMainPartners.module.scss';

import Partners1 from '@/shared/assets/images/partners_1.png';
import Partners2 from '@/shared/assets/images/partners_2.png';
import Partners3 from '@/shared/assets/images/partners_3.png';
import Partners4 from '@/shared/assets/images/partners_4.png';
import Partners5 from '@/shared/assets/images/partners_5.png';
import Partners6 from '@/shared/assets/images/partners_6.png';
import Partners7 from '@/shared/assets/images/partners_7.svg';
import Partners8 from '@/shared/assets/images/partners_8.svg';
import Partners9 from '@/shared/assets/images/partners_9.svg';
import Partners10 from '@/shared/assets/images/partners_10.svg';
import { Marquee } from '@/shared/ui';

const WidgetMainPartners: FC = () => {
  return (
    <div className={styles.partners}>
      <Marquee speed={30}>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners1}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners2}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners3}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners4}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners10}
              alt=""
            />
          </div>
        </div>
      </Marquee>
      <Marquee
        speed={30}
        direction="right"
      >
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners5}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners6}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners7}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners8}
              alt=""
            />
          </div>
        </div>
        <div className={styles.partners__item}>
          <div className={styles.partners__image}>
            <img
              src={Partners9}
              alt=""
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default WidgetMainPartners;
