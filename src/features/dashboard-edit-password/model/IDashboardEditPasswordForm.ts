import ERoles from '@/shared/config/enums/ERoles';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';

export interface IDashboardEditPasswordForm {
  id?: number;
  name: string;
  surname: string;
  secondName?: string;
  birthDate: string;
  documents?: IDocument[];
  role?: ERoles;
  email: string;
  phone: string;
  password: string;
  passwordRepeat: string;
}
