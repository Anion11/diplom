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
    descr: 'Обязательное страхование ответственности на случай ДТП',
    image: '',
    link: ''
  },
  {
    title: 'Каско',
    descr: 'Полная защита автомобиля от повреждений, гибели и хищения',
    image: '',
    link: ''
  },
  {
    title: 'Страхование квартир',
    descr:
      'Защита жилья с возможность самостоятельно определить, что и на какую сумму застраховать',
    image: '',
    link: ''
  },
  {
    title: 'Страхование домов',
    descr:
      'Защита дома от пожара, затоплений, урагана, кражи драгоценных вещей, выбитых окон и других рисков',
    image: '',
    link: '',
    mods: 'container__item_colspan2'
  },
  {
    title: 'Страхование от несчастных случаев',
    descr: 'Финансовая защита для разных ситуаций — от болезней до спортивных травм',
    image: '',
    link: '',
    mods: 'container__item_colspan2'
  }
];
