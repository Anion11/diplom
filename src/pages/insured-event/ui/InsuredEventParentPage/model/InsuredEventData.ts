import { IWidgetInsuredEvent } from '@/widgets/WidgetInsuredEvent/model/IWidgetInsuredEvent';

export const insuredEventData: IWidgetInsuredEvent[] = [
  {
    title: 'Автострахование',
    descr: 'В случае аварии, угона или повреждения автомобиля',
    links: [
      {
        link: 'kasko',
        title: 'КАСКО'
      }
    ]
  },
  {
    title: 'Имущество',
    descr: 'В случае повреждения или утраты имущества (пожар, затопление, кража и т.д.)',
    links: [
      {
        link: 'property',
        title: 'Квартира'
      }
    ]
  },
  {
    title: 'Здоровье',
    descr: 'В случае болезни, травмы или несчастного случая',
    links: [
      {
        link: 'health',
        title: '«Антиклещ»'
      }
    ]
  }
];
