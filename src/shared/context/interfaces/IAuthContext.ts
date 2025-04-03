import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

export interface IAuthContext {
  login?: (token: string) => Promise<void>;
  logout?: () => void;
  token: string | null;
  user: IUserOutput | null;
  loading: boolean;
}
