export interface ICheckbox {
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  id?: string;
  formError?: string | null;
  isChecked?: boolean;
  children?: React.ReactNode;
}
