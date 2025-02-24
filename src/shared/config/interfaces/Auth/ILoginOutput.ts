import { ITokenOutput } from '@/shared/config/interfaces/Auth/ITokenOutput.ts';
import { IUserOutput } from '@/shared/config/interfaces/Auth/IUserOutput.ts';

export interface ILoginOutput {
  userOutput: IUserOutput;
  tokenOutput: ITokenOutput;
}
