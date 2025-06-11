enum EDocuments {
  PASSPORT = 'PASSPORT',
  OMS = 'OMS'
}

export function getDocumentLabel(type: EDocuments | string): string {
  return documentTypeLabels[type as EDocuments] || type;
}

const documentTypeLabels: Record<EDocuments, string> = {
  [EDocuments.PASSPORT]: 'Паспорт',
  [EDocuments.OMS]: 'ОМС'
};

export default EDocuments;
