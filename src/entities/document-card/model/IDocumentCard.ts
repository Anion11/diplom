import { IUser } from '@/shared/config/interfaces/User/IUser';

export interface IDocumentCard {
  data: IUser;
  fetchUsers: () => void;
}
