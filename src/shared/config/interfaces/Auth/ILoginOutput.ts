import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

export interface ILoginOutput extends IUserOutput {
  token: string;
  // token: ITokenOutput;
}
