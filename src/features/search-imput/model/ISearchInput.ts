export interface ISearchInput {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
}
