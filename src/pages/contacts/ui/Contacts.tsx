import { FC } from 'react';

import styles from './Contacts.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Inner, List, Section, SectionHead, Typography } from '@/shared/ui';

const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <Section>
        <Inner>
          <SectionHead>
            <div className={styles.contacts__head}>
              <Typography
                tag="h1"
                bold={700}
                type={ETypographyType.h1}
              >
                Контактная информация
              </Typography>
              <Typography
                tag="p"
                type={ETypographyType.p1}
              >
                Мы всегда готовы ответить на ваши вопросы и помочь с выбором страховых услуг.
                <br />
                Свяжитесь с нами удобным для вас способом!
              </Typography>
            </div>
          </SectionHead>
          <div className={styles.contacts__content}>
            <div className={styles.contacts__block}>
              <Typography
                tag="h3"
                bold={700}
                type={ETypographyType.h3}
              >
                Телефон
              </Typography>
              <div className={styles.contacts__items}>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Горячая линия:</b> <a href="tel: 88005553535"> 8 (800) 555-35-35</a>
                </Typography>
              </div>
            </div>
            <div className={styles.contacts__block}>
              <Typography
                tag="h3"
                bold={700}
                type={ETypographyType.h3}
              >
                Электронная почта
              </Typography>
              <div className={styles.contacts__items}>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Общие вопросы:</b>{' '}
                  <a href="mailto:insureFlowInfo@mail.ru">insureFlowInfo@mail.ru</a>
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Поддержка клиентов:</b>{' '}
                  <a href="mailto:insureFlowSupport@insureflow.ru">insureFlowSupport@mail.ru</a>
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Сотрудничество:</b>{' '}
                  <a href="mailto:insureFlowPartner@insureflow.ru">insureFlowPartner@mail.ru</a>
                </Typography>
              </div>
            </div>
            <div className={styles.contacts__block}>
              <Typography
                tag="h3"
                bold={700}
                type={ETypographyType.h3}
              >
                Адрес
              </Typography>
              <div className={styles.contacts__items}>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Главный офис:</b> г. Воронеж, ул. 20-летия Октября, д. 42, кв. 19, 394071
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Часы работы:</b> Пн-Пт: 9:00 - 18:00, Сб-Вс: выходной
                </Typography>
              </div>
            </div>
            <div className={styles.contacts__block}>
              <Typography
                tag="h3"
                bold={700}
                type={ETypographyType.h3}
              >
                Реквизиты компании
              </Typography>
              <div className={styles.contacts__items}>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Наименование:</b> Общество с ограниченной ответственностью «InsureFlow»
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Генеральный директор:</b> Клюкойть Никита Андреевич
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>ИНН:</b> 644010092923
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>ОГРН:</b> 1173668069433
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>КПП:</b> 771301001
                </Typography>
                <Typography
                  tag="p"
                  type={ETypographyType.p1}
                >
                  <b>Банковские реквизиты:</b>
                  <br />
                  <List>
                    <li>
                      <Typography type={ETypographyType.p1}>
                        <b>Расчетный счет:</b> 30101810145250000974
                      </Typography>
                    </li>
                    <li>
                      <Typography type={ETypographyType.p1}>
                        <b>Банк:</b> АО «Т-Банк»
                      </Typography>
                    </li>
                    <li>
                      <Typography type={ETypographyType.p1}>
                        <b>БИК:</b> 044525974
                      </Typography>
                    </li>
                  </List>
                </Typography>
              </div>
            </div>
            <div className={styles.contacts__foot}>
              <Typography
                tag="h4"
                bold={700}
                type={ETypographyType.h4}
              >
                Мы ценим ваше доверие и всегда готовы помочь!
              </Typography>
            </div>
          </div>
        </Inner>
      </Section>
    </div>
  );
};

export default Contacts;
