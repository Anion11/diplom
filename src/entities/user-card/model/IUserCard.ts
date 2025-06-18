import { IUser } from '@/shared/config/interfaces/User/IUser';

export interface IUserCard {
  data: IUser;
  updateUser: (user: IUser) => void;
}
