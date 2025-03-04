import { ReactNode } from 'react';

export enum ESectionHeadType {
  SMALL = 'sectionHead_small'
}

export interface ISectionHead {
  sectionType?: ESectionHeadType;
  children?: ReactNode;
  className?: string;
}
