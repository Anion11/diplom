import accident from '@/shared/assets/images/insurance-types/accident.png';
import apartment from '@/shared/assets/images/insurance-types/apartment.png';
import house from '@/shared/assets/images/insurance-types/house.png';
import kasko from '@/shared/assets/images/insurance-types/kasko.png';
import osago from '@/shared/assets/images/insurance-types/osago.png';

interface IInsuranceTypesData {
  title: string;
  descr: string;
  image: string;
  link: string;
  mods?: string;
}

export const InsuranceTypesData: IInsuranceTypesData[] = [
  {
    title: 'ОСАГО',
    descr: 'Обязательное страховние гражданской ответственности владельцев транспортных средств',
    image: osago,
    link: '/osago'
  },
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
    title: 'Страхование домов',
    descr: 'Комплексная защита частного дома от стихийных бедствий, краж и повреждений',
    image: house,
    link: '/houses-insurance',
    mods: 'container__item_colspan2'
  },
  {
    title: 'Страхование от несчастных случаев',
    descr: 'Финансовая поддержка при травмах, заболеваниях и чрезвычайных ситуациях',
    image: accident,
    link: '/accident-insurance',
    mods: 'container__item_colspan2'
  }
];
