import { IApplication } from '@/shared/config/interfaces/Application/IApplication';

export interface IPoliceCard {
  data: IApplication;
  fetchApplications: () => void;
}
