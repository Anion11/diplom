import {
  IHeaderDropdownColumn,
  IHeaderDropdownItem
} from '@/shared/ui/HeaderDropdown/model/IHeaderDropdown';

const createDropdownData = (
  title: string,
  items: IHeaderDropdownItem[]
): IHeaderDropdownColumn => ({
  title,
  items
});

export const HeaderDropdownAutoData: IHeaderDropdownColumn[] = [
  createDropdownData('Автомобили', [
    { name: 'Квско', link: '/kasko' },
    { name: 'ОСАГО', link: '/osago' }
  ])
];

export const HeaderDropdownHealthData: IHeaderDropdownColumn[] = [
  createDropdownData('Здоровье', [
    { name: 'Страхование от несчастных случаев', link: '/accident-insurance' },
    { name: 'Страхование спортсменов', link: '/athletes-insurance' }
  ])
];

export const HeaderDropdownPropertyData: IHeaderDropdownColumn[] = [
  createDropdownData('Недвижимость', [
    { name: 'Страхование квартир', link: '/apartments-insurance' },
    { name: 'Страхование домов', link: '/houses-insurance' }
  ])
];
