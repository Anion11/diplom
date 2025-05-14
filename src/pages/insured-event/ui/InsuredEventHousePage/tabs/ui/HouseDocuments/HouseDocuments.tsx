import { FC } from 'react';

import styles from './HouseDocuments.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { List, Typography } from '@/shared/ui';

const HouseDocuments: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__head}>
        <Typography
          tag="h4"
          type={ETypographyType.h4}
          bold={700}
        >
          Основные документы от клиента
        </Typography>
      </div>
      <div className={styles.container__body}>
        <List isPrimary>
          <li>
            <Typography type={ETypographyType.p1}>
              Оформленное заявление на страховую выплату
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              Действующий страховой полис со всеми приложениями и дополнениями
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              Паспорт или иной документ, подтверждающий личность и полномочия заявителя
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              Документы, подтверждающие право на получение страховой выплаты (выписка из ЕГРН,
              свидетельство о праве собственности, договор аренды или социального найма)
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              Для дачных построек - документы из садоводческого объединения (членская книжка,
              решение правления)
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>
              Техническая документация на объект (кадастровый паспорт, план помещения, техническое
              заключение)
            </Typography>
          </li>
          <li>
            <Typography type={ETypographyType.p1}>Банковские реквизиты</Typography>
          </li>
        </List>
      </div>
      <div className={styles.container__head}>
        <Typography
          tag="h4"
          type={ETypographyType.h4}
          bold={700}
        >
          Документы от госорганов и организаций
        </Typography>
        <br />
        <Typography type={ETypographyType.p1}>
          Подтверждающие факт и обстоятельства страхового случая:
        </Typography>
      </div>
      <div className={styles.container__body}>
        <List isPrimary>
          <li>
            <Typography
              type={ETypographyType.p1}
              bold={700}
            >
              Аварийные/чрезвычайные ситуации:
              <List
                isPrimary
                className={styles.container__listInner}
                isSquare
              >
                <li>
                  <Typography type={ETypographyType.p1}>
                    Справка МЧС (при пожаре, наводнении)
                  </Typography>
                </li>
                <li>
                  <Typography type={ETypographyType.p1}>
                    Акт аварийной службы ЖКХ (при затоплении, прорыве коммуникаций)
                  </Typography>
                </li>
                <li>
                  <Typography type={ETypographyType.p1}>
                    Заключение Ростехнадзора (если повреждения связаны с техногенными причинами)
                  </Typography>
                </li>
              </List>
            </Typography>
          </li>
          <li>
            <Typography
              type={ETypographyType.p1}
              bold={700}
            >
              Противоправные действия:
              <List
                isPrimary
                className={styles.container__listInner}
                isSquare
              >
                <li>
                  <Typography type={ETypographyType.p1}>
                    Постановление полиции или справка о возбуждении уголовного дела (при краже,
                    вандализме)
                  </Typography>
                </li>
                <li>
                  <Typography type={ETypographyType.p1}>
                    Протокол ГИБДД (если ущерб нанесен в результате ДТП)
                  </Typography>
                </li>
              </List>
            </Typography>
          </li>
          <li>
            <Typography
              type={ETypographyType.p1}
              bold={700}
            >
              Стихийные бедствия:
              <List
                isPrimary
                className={styles.container__listInner}
                isSquare
              >
                <li>
                  <Typography type={ETypographyType.p1}>
                    Справка Росгидромета или местной метеослужбы (при урагане, паводке)
                  </Typography>
                </li>
              </List>
            </Typography>
          </li>
        </List>
      </div>
    </div>
  );
};

export default HouseDocuments;
