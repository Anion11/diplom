export interface ITabItem {
  label: string;
  content: React.ReactNode;
}

export interface ITabs {
  tabs: ITabItem[];
  mods?: string;
}
