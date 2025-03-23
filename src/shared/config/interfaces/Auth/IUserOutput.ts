import ERoles from '@/shared/config/enums/ERoles.ts';

export interface IPerson {
  id: number;
  name: string;
  secondName: string;
  surname: string;
}

export interface IUserOutput {
  id: number;
  username: string;
  createdAt: string;
  roles: ERoles[];
  blocked: boolean;
  email: string;
  phone: string;
  person: IPerson;
}
