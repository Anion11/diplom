import type { EApplicationStatus } from '@/shared/config/enums/EApplicationStatus';
import type { EApplicationType } from '@/shared/config/enums/EApplicationType';
import type { EPeriod } from '@/shared/config/enums/EPeriod';
import type ERoles from '@/shared/config/enums/ERoles';

interface IPerson {
  id: number;
  username: string;
  email: string;
  phone: string;
  person: {
    id: number;
    name: string;
    surname: string;
    secondName: string;
    birthDate: string;
    documents: {
      id: number;
      serial: string;
      number: string;
      authority: string;
      type: string;
      dateIssue: string;
      personId: number;
      userApproved: number;
      approved: boolean;
    }[];
  };
  createdAt: string;
  roles: { id: number; role: ERoles }[];
  blocked: boolean;
}

export interface IApplication {
  id: number;
  username: string;
  email: string;
  phone: string;
  person: IPerson;
  startDate: string;
  periodic: EPeriod;
  endDate: string;
  cost: number;
  details: {
    id: number;
    type: EApplicationType;
    worker: IPerson | null;
    serial: string;
    num: string;
    comment: string | null; // TODO: Проверить тип;
    price: number;
    status: EApplicationStatus;
    typeText: string;
  };
  documents: {
    uri: number;
    filename: string;
  }[];
  additionalPersons: []; // TODO: Добавить тип;
  finishingCost: number;
  structuralElCost: number;
  neighborsCost: number;
  household: number;
  monthCost: number;
  fiasAddress: string;
  egrn: string | null;
  address: string | null;
  type: EApplicationType;
}

export interface IApplicationCard {
  data: IApplication;
  fetchApplications: VoidFunction;
}
