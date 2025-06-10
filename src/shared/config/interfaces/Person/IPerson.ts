import { IDocument } from './IDocument';

export interface IPerson {
  birthDate: Date;
  documents: IDocument[];
  id: number;
  name: string;
  secondName: string;
  surname: string;
}
