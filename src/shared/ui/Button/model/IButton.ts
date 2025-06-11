export enum EButtonTypes {
  LINK = 'link'
}

export interface IButton {
  type?: EButtonTypes;
  mods?: string[] | string;
  text?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  link?: string;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}
