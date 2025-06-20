import { IWorker } from '@/shared/config/interfaces/Worker/IWorker';

export interface IWorkerCard {
  data: IWorker;
  updateWorker: (worker: IWorker) => void;
}
