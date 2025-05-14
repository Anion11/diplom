import { ReactNode } from 'react';

export interface IList {
  children?: ReactNode;
  className?: string;
  isNumeric?: boolean;
  isPrimary?: boolean;
  isSquare?: boolean;
}
