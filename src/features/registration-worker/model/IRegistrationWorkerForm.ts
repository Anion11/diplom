import ERoles from '@/shared/config/enums/ERoles';

export interface IRegistrationWorkerForm {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  secondName?: string;
  birthDate: string;
  role?: ERoles;
  password: string;
}
