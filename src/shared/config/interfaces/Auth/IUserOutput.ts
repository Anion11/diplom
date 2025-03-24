import ERoles from '@/shared/config/enums/ERoles.ts';

export interface IUserOutput {
  id: number;
  username: string;
  name: string;
  authorities: {
    name: ERoles;
  }[];
  firstName: string;
  secondName: string;
  lastName: string;
  blocked: boolean;
  email: string;
  phoneNumber: string;
}
