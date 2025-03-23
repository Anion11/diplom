import ERoles from '@/shared/config/enums/ERoles';

export interface IRegistrationForm {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  secondName?: string;
  birthday: string;
  role?: ERoles;
  password: string;
  passwordRepeat: string;
  login?: string; // что это
}
