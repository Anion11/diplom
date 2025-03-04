import React, { createElement, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType.ts';
import { ITypographyProps } from '@/shared/ui/typography/ui/interfaces/ITypographyProps';

const Typography: React.FC<PropsWithChildren<ITypographyProps>> = ({
  children,
  type = ETypographyType.p1,
  tag = 'span',
  className,
  bold = 400,
  ...props
}) => {
  const classNames = clsx(styles[type], className, styles[`bold--${bold}`]);
  return createElement(tag, { ...props, className: classNames }, children);
};

export default Typography;
