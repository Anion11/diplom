import { EPeriod } from '@/shared/config/enums/EPeriod';

export interface IHouseApplicationForm {
  fiasAddress: string;
  finishingCost: number;
  structuralElCost: number;
  neighborsCost: number;
  household: number;
  cost: number;
  person: number;
  periodic: EPeriod;
}
