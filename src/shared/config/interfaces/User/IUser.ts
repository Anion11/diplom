import { IFileData } from '@/shared/config/interfaces/Article/IFileData.ts';

export interface IUser {
  description: string;
  dolj1: string;
  dolj2: string;
  name: string;
  surname: string;
  secondName: string;
  user: number;
  fileData: IFileData;
}
