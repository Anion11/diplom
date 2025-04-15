import ERoles from '@/shared/config/enums/ERoles.ts';

export interface IUserOutput {
  authorities: {
    name: ERoles;
  }[];
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  name: string;
  personId: number;
  phoneNumber: string;
  secondName: string;
  username: string;
}
