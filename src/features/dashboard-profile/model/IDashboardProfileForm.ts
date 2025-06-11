import ERoles from '@/shared/config/enums/ERoles';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';

export interface IDashboardProfileForm {
  id?: number;
  name: string;
  surname: string;
  secondName?: string;
  birthDate: string;
  documents?: IDocument[];
  role?: ERoles;
  email: string;
  phoneNumber: string;
}
