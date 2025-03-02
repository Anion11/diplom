export interface IHeaderDropdownItem {
  name: string;
  link: string;
}

export interface IHeaderDropdownColumn {
  title: string;
  items: IHeaderDropdownItem[];
}

export interface IHeaderDropdown {
  columns: IHeaderDropdownColumn[];
  className?: string;
}
