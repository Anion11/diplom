import { FC, useCallback, useRef } from 'react';
import clsx from 'clsx';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { IBannerSwiper } from '../model/IBannerSwiper';

import styles from './WidgetBannerSwiper.module.scss';

const WidgetBannerSwiper: FC<IBannerSwiper> = props => {
  const { children } = props;

  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        ref={sliderRef}
        className={clsx(
          styles.container__slider,
          Array.isArray(children) && styles.container__slider_multiple
        )}
        wrapperClass={styles.container__wrapper}
        slidesPerView={1}
        spaceBetween={0}
        observer={true}
        observeParents={true}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000
        }}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide
              className={styles.container__slide}
              key={index}
            >
              {child}
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>
      {Array.isArray(children) && (
        <div className={styles.container__buttons}>
          <div
            onClick={handlePrev}
            className={styles.container__prev}
          />
          <div
            onClick={handleNext}
            className={styles.container__next}
          />
        </div>
      )}
    </div>
  );
};

export default WidgetBannerSwiper;
