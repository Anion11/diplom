export interface IDocument {
  id: number;
  serial: string;
  number: string;
  authority: string;
  dateIssue: string;
  type: string;
  personId: number;
  isApproved: boolean;
  userApproved: number;
  approved: boolean;
}
