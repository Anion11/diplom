import accident from '@/shared/assets/images/insurance-types/accident.png';
import apartment from '@/shared/assets/images/insurance-types/apartment.png';
import kasko from '@/shared/assets/images/insurance-types/kasko.png';

interface IInsuranceTypesData {
  title: string;
  descr: string;
  image: string;
  link: string;
  mods?: string;
}

export const InsuranceTypesData: IInsuranceTypesData[] = [
  {
    title: 'Каско',
    descr: 'Комплексная страховка автомобиля от любых повреждений, угона и полной гибели',
    image: kasko,
    link: '/kasko'
  },
  {
    title: 'Страхование квартир',
    descr: 'Индивидуальная защита жилья с гибким выбором страховых рисков и суммы покрытия',
    image: apartment,
    link: '/apartments-insurance'
  },
  {
    title: 'Страхование от укуса клеща',
    descr:
      'Финансовая защита на случай укуса клеща — покрытие расходов на медицинскую помощь, диагностику и лечение',
    image: accident,
    link: '/accident-insurance'
  }
];
