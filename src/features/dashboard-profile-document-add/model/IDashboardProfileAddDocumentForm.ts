import EDocuments from '@/shared/config/enums/EDocuments';

export interface IDashboardProfileAddDocumentForm {
  serial: string;
  number: string;
  authority: string;
  dateIssue: string;
  type: EDocuments;
}
