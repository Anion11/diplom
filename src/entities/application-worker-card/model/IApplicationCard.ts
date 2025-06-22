import { IApplication } from '@/shared/config/interfaces/Application/IApplication';

export interface IApplicationCard {
  data: IApplication;
  fetchApplications: () => void;
}
