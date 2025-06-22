import EDocuments from '../../enums/EDocuments';

export interface IDocument {
  id: number;
  serial: string;
  number: string;
  authority: string;
  dateIssue: string;
  type: EDocuments;
  personId: number;
  isApproved: boolean;
  userApproved: number;
  approved: boolean;
}
