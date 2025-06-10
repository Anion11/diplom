export interface ISideTabItem {
  label: string;
  content?: React.ReactNode;
  mods?: string;
  onClick?: () => void;
}

export interface ISideTabs {
  tabs: ISideTabItem[];
  mods?: string;
}
