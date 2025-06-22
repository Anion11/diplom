import { EApplicationStatus } from '../../enums/EApplicationStatus';
import { EApplicationType } from '../../enums/EApplicationType';
import { IAdditionalPersons } from '../AdditionalPersons/IAdditionalPersons';
import { IDocumentFile } from '../DocumentFile/IDocumentFile';
import { IWorker } from '../Worker/IWorker';

export interface IApplicationDetails {
  type: EApplicationType; //FIXME
  status: EApplicationStatus; //FIXME
  id: number;
  serial: string;
  num: string;
  comment: string;
  price: number; //что это
  workerId: IWorker;
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
  dociments: IDocumentFile[];
  details: IApplicationDetails;
  additionalPersons: IAdditionalPersons;
}
