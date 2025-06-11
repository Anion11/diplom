import { ReactNode } from 'react';

export interface IModal {
  onClose: () => void;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  isOpen: boolean;
  headText?: string;
}
