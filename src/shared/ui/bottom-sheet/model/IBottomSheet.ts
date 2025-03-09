import { ReactNode } from 'react';

export interface IBottomSheet {
  onClose: () => void;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  isMenuClose?: boolean;
  setMenuClose?: (value: boolean) => void;
}
