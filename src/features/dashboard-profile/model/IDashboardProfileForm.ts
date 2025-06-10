import ERoles from '@/shared/config/enums/ERoles';
import { IDocument } from '@/shared/config/interfaces/Person/IDocument';

export interface IDashboardProfile {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  secondName?: string;
  birthDate: string;
  role?: ERoles;
  documents: IDocument[];
}

export interface IDashboardProfileForm {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  secondName?: string;
  birthDate: string;
}
