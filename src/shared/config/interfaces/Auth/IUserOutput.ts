import { IPerson } from '../Person/IPerson';

import ERoles from '@/shared/config/enums/ERoles.ts';

export interface IRole {
  name: ERoles;
  id?: number;
}

export interface IUserOutput {
  blocked: boolean;
  email: string;
  id: number;
  name: string;
  orgOidRestriction: string;
  person: IPerson;
  phone: string;
  roles: IRole[];
  username: string;
}
