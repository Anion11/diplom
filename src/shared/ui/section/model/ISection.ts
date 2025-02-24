import { ReactNode } from 'react';

export interface ISection extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}
