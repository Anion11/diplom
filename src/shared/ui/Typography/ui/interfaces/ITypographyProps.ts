import { HTMLAttributes } from 'react';

import ETypographyType from '@/shared/config/enums/ETypgraphyType.ts';

export type TTypographyTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'b';

export interface ITypographyProps extends HTMLAttributes<HTMLDivElement> {
  type?: ETypographyType;
  tag?: TTypographyTags;
  bold?: number;
}
