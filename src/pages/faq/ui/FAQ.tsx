import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './FAQ.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { useAuthContext } from '@/shared/hooks/useAuthContext';
import { Accordion, Inner, List, Section, SectionHead, Typography } from '@/shared/ui';

const FAQ: FC = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.faq}>
      <Section>
        <Inner>
          <SectionHead>
            <Typography
              tag="h1"
              type={ETypographyType.h1}
              bold={700}
            >
              Часто задаваемые вопросы
            </Typography>
          </SectionHead>
          <Accordion title="Какие виды страхования вы предлагаете?">
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              Мы предлагаем широкий спектр страховых услуг, включая:
            </Typography>
            <List>
              <li>
                <Typography type={ETypographyType.p1}>Автострахование (ОСАГО)</Typography>
              </li>
              <li>
                <Typography type={ETypographyType.p1}>
                  Страхование недвижимости (квартиры)
                </Typography>
              </li>
              <li>
                <Typography type={ETypographyType.p1}>
                  Медицинское страхование (страхование от укуса клеща)
                </Typography>
              </li>
            </List>
          </Accordion>
          <Accordion title="Как оформить страховой полис?">
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              Вы можете оформить полис онлайн на нашем сайте, выбрав нужный вид страхования и
              заполнив необходимые данные. Также вы можете связаться с нашим менеджером по&nbsp;
              <a href="tel: 88005553535">телефону</a> для консультации.
            </Typography>
          </Accordion>
          <Accordion title="Какие документы нужны для оформления страхования?">
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              Для оформления страховки потребуются:
            </Typography>
            <List>
              <li>
                <Typography type={ETypographyType.p1}>
                  Паспорт или другой документ, удостоверяющий личность
                </Typography>
              </li>
              <li>
                <Typography type={ETypographyType.p1}>
                  Документы на объект страхования (например, СТС для авто, документы на
                  недвижимость)
                </Typography>
              </li>
            </List>
          </Accordion>
          <Accordion title="Что делать, если произошел страховой случай?">
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              Немедленно свяжитесь с нами по <a href="tel: 88005553535">телефону горячей линии</a>{' '}
              или перейдите <Link to="/insured-event">по ссылке</Link>. Наши специалисты подскажут,
              какие действия необходимо предпринять и какие документы потребуются для оформления
              выплаты.
            </Typography>
          </Accordion>
          <Accordion title="Как продлить страховой полис?">
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              Вы можете продлить полис онлайн через{' '}
              <Link to={user ? '/lk' : '/login'}>личный кабинет</Link> на нашем сайте.
            </Typography>
          </Accordion>
          <Accordion title="Как узнать статус рассмотрения моего страхового случая?">
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              Вы можете отслеживать статус рассмотрения вашего случая через{' '}
              <Link to={user ? '/lk' : '/login'}>личный кабинет</Link> на сайте или связаться с
              нашим менеджером по <a href="tel: 88005553535">телефону горячей линии</a>.
            </Typography>
          </Accordion>
          <Accordion title="Что делать, если я переехал в другой город или страну?">
            <Typography
              tag="p"
              type={ETypographyType.p1}
            >
              Если вы переехали, сообщите нам об этом, чтобы мы могли обновить ваши данные. В
              зависимости от типа страховки, возможно, потребуется переоформление полиса.
            </Typography>
          </Accordion>
        </Inner>
      </Section>
    </div>
  );
};

export default FAQ;
