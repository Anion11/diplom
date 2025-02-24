import { EStatusArticle } from '@/shared/config/enums/EStatusArticle.ts';

export const translateStatusArticle: Record<EStatusArticle, string> = {
  [EStatusArticle.Sent]: 'Отправлено на проверку',
  [EStatusArticle.Review]: 'На проверке',
  [EStatusArticle.Back]: 'Требуется доработка',
  [EStatusArticle.Edit]: 'Отредактировано',
  [EStatusArticle.Ready]: 'Готово к публикации',
  [EStatusArticle.Ok]: 'Опубликовано'
};
