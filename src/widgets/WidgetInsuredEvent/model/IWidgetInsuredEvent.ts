export interface IWidgetInsuredEventLink {
  link: string;
  title: string;
}

export interface IWidgetInsuredEvent {
  className?: string;
  title: string;
  descr: string;
  links: IWidgetInsuredEventLink[];
}
