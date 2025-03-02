import ERoles from '@/shared/config/enums/ERoles.ts';

export interface IUserOutput {
  id: number;
  name: string;
  username: string;
  roles: ERoles[];
}
