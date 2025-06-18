import ERoles from '../../enums/ERoles';
import { IDocument } from '../Person/IDocument';
import { IPerson } from '../Person/IPerson';

export interface IUser {
  createdAt: string;
  roles: {
    role: ERoles;
  }[];
  id: number;
  username: string;
  password: string;
  email: string;
  phone: string;
  person: IPerson;
  isBlocked: boolean;
  blocked: boolean;
  documents: IDocument[];
}
