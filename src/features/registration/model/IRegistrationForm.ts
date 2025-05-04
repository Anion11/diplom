import ERoles from '@/shared/config/enums/ERoles';

export interface IRegistrationForm {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  secondName?: string;
  birthDate: string;
  role?: ERoles;
  password: string;
  passwordRepeat: string;
}
