enum EDocuments {
  PASSPORT = 'PASSPORT'
}

export function getDocumentLabel(type: EDocuments | string): string {
  return documentTypeLabels[type as EDocuments] || type;
}

export const documentTypeLabels: Record<EDocuments, string> = {
  [EDocuments.PASSPORT]: 'Паспорт'
};

export default EDocuments;
