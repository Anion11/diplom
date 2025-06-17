import {
  IHeaderDropdownColumn,
  IHeaderDropdownItem
} from '@/shared/ui/header-dropdown/model/IHeaderDropdown';

const createDropdownData = (
  title: string,
  items: IHeaderDropdownItem[]
): IHeaderDropdownColumn => ({
  title,
  items
});

export const HeaderDropdownAutoData: IHeaderDropdownColumn[] = [
  createDropdownData('Автомобили', [{ name: 'Квско', link: '/kasko' }])
];

export const HeaderDropdownHealthData: IHeaderDropdownColumn[] = [
  createDropdownData('Здоровье', [
    { name: 'Страхование от укуса клеща', link: '/antipincer-insurance' }
  ])
];

export const HeaderDropdownPropertyData: IHeaderDropdownColumn[] = [
  createDropdownData('Недвижимость', [
    { name: 'Страхование квартир', link: '/apartments-insurance' }
  ])
];
