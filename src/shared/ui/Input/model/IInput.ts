export interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string | File[]) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
  id?: string;
  min?: string;
  max?: string;
  formError?: string | null;
  autocomplete?: string;
}
