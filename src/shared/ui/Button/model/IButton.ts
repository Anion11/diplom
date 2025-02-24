export enum EButtonTypes {
  LINK = 'link'
}

export interface IButton {
  type?: EButtonTypes;
  mods?: string[] | string;
  text?: string;
  leftIcon?: string;
  rightIcon?: string;
  link?: string;
  onClick?: () => void;
  className?: string;
}
