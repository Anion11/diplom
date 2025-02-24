import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

export interface IAuthContext {
  login?: (token: string) => void;
  logout?: () => void;
  token: string | null;
  isAuth: boolean;
  user: IUserOutput | null;
}
