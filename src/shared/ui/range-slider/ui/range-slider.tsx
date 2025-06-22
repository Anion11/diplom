import { useState } from 'react';
import clsx from 'clsx';
import type { SliderProps } from 'rc-slider';
import Slider from 'rc-slider';

import styles from './range-slider.module.scss';

import 'rc-slider/assets/index.css';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import Typography from '@/shared/ui/typography/ui/Typography';

export interface RangeSliderProps extends SliderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  label?: string;
}

export default function RangeSlider({
  size = 'md',
  color = 'primary',
  className,
  label,
  min = 0,
  max = 100,
  ...props
}: RangeSliderProps) {
  const [value, setValue] = useState<number>(
    typeof props.defaultValue === 'number' ? props.defaultValue : min
  );

  const handleChange = (val: number | number[]) => {
    const newVal = typeof val === 'number' ? val : val[0];
    setValue(newVal);
    props.onChange?.(val);
  };

  return (
    <div className={styles.rangeWrapper}>
      <div className={styles.topLabel}>
        <Typography type={ETypographyType.p2}>{label}</Typography>
        <Typography
          type={ETypographyType.p1}
          bold={700}
          className={styles.value}
        >
          {value.toLocaleString('ru-RU')} ₽
        </Typography>
      </div>

      <div
        className={clsx(
          styles.sliderContainer,
          styles.sliderBase,
          styles[`slider${size.charAt(0).toUpperCase() + size.slice(1)}`],
          styles[color],
          className
        )}
      >
        <Slider
          {...props}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
      </div>

      <div className={styles.bottomLabels}>
        <Typography type={ETypographyType.p3}>{min.toLocaleString('ru-RU')} ₽</Typography>
        <Typography type={ETypographyType.p3}>{max.toLocaleString('ru-RU')} ₽</Typography>
      </div>
    </div>
  );
}
