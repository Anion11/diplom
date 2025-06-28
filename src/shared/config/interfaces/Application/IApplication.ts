import type { EApplicationStatus } from '../../enums/EApplicationStatus';
import type { EApplicationType } from '../../enums/EApplicationType';
import type { IAdditionalPersons } from '../AdditionalPersons/IAdditionalPersons';
import type { IDocumentFile } from '../DocumentFile/IDocumentFile';
import type { IWorker } from '../Worker/IWorker';

export interface IApplicationDetails {
  id: number;
  type: EApplicationType; //FIXME
  worker: IWorker | null;
  serial: string;
  status: EApplicationStatus; //FIXME
  num: string;
  comment: string;
  price: number; //что это
}

export interface IApplication {
  id: number;
  finishingCost: number;
  structuralElCost: number;
  neighborsCost: number;
  household: number;
  monthCost: number;
  fiasAddress: string;
  egrn: string;
  documents: IDocumentFile[];
  details: IApplicationDetails;
  additionalPersons: IAdditionalPersons;
}
