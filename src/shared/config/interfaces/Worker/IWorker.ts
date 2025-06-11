import ERoles from '../../enums/ERoles';
import { IPerson } from '../Person/IPerson';

export interface IWorker {
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
}
