import { ReactNode } from 'react';

export interface IAccordion {
  title: string;
  children: ReactNode;
  mods?: string | string[];
}
