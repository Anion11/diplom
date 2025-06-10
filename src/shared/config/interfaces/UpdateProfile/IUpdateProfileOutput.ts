import { IDocument } from '../Person/IDocument';

export interface IUpdateProfileOutput {
  id: number;
  name: string;
  surname: string;
  secondName: string;
  birthDate: string;
  documents: IDocument[];
}
