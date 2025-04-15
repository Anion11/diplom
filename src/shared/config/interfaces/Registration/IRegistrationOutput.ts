import { IPerson } from '../Person/IPerson';

export interface IRegistrationOutput {
  blocked: boolean;
  createdAt: Date;
  person: IPerson;
  email: string;
  phone: string;
  username: string;
}
