import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

export interface IAuthContext {
  login?: (token: string) => void;
  logout?: () => void;
  token: string | null;
  user: IUserOutput | null;
  isAuth: boolean;
}
