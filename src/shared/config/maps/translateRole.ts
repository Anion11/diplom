import ERoles from '@/shared/config/enums/ERoles.ts';

export const translateRole: Record<ERoles, string> = {
  [ERoles.Admin]: 'Админ',
  [ERoles.User]: 'Автор',
  [ERoles.Moder]: 'Редактор'
};
