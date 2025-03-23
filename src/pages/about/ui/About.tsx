import { FC } from 'react';

import styles from './About.module.scss';

import IconList from '@/shared/assets/icons/icon_checklist.svg?react';
import IconClock from '@/shared/assets/icons/icon_clock.svg?react';
import IconDefender from '@/shared/assets/icons/icon_defender.svg?react';
import IconHelper from '@/shared/assets/icons/icon_helper.svg?react';
import IconInnovation from '@/shared/assets/icons/icon_innovation.svg?react';
import IconTransparent from '@/shared/assets/icons/icon_transparency.svg?react';
import IconTrust from '@/shared/assets/icons/icon_trust.svg?react';
import bannerImage from '@/shared/assets/images/banner_about.png';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { Banner, Inner, List, Section, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';
import { WidgetAboutCard, WidgetIconText } from '@/widgets';

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Section>
        <Banner
          title="О компании"
          descr="InsureFlow — это современная страховая компания, которая предлагает надежные и индивидуальные решения для защиты вашего здоровья и имущества. Мы работаем, чтобы сделать страхование простым, понятным и доступным для каждого."
          image={bannerImage}
        />
      </Section>
      <Section mods={'first'}>
        <Inner>
          <Section>
            <SectionHead>
              <Typography
                bold={700}
                type={ETypographyType.h1}
              >
                Почему выбирают нас?
              </Typography>
            </SectionHead>
            <div className={styles.about__advantages}>
              <WidgetIconText
                icon={<IconList />}
                title={'Широкий спектр услуг'}
                descr="Защита для всего, что важно: автомобили, имущество, здоровье"
              />
              <WidgetIconText
                icon={<IconClock />}
                title={'Быстрое оформление'}
                descr={`Оформите полис онлайн всего за\u00A05\u00A0минут`}
              />
              <WidgetIconText
                icon={<IconHelper />}
                title={'Круглосуточная поддержка'}
                descr="Помощь 24/7 — мы всегда на связи, когда вам это нужно"
              />
            </div>
          </Section>
          <Section>
            <SectionHead>
              <Typography
                bold={700}
                type={ETypographyType.h1}
              >
                Наши ценности
              </Typography>
            </SectionHead>
            <div className={styles.about__values}>
              <WidgetAboutCard
                icon={<IconDefender />}
                title={'Надежность'}
                descr="Мы создаём безопасность, которой можно доверять"
              />
              <WidgetAboutCard
                icon={<IconTransparent />}
                title={'Прозрачность'}
                descr={`Никаких скрытых условий — всё чётко и\u00A0понятно`}
              />
              <WidgetAboutCard
                icon={<IconTrust />}
                title={'Забота о клиенте'}
                descr="Мы учитываем потребности каждого клиента"
              />
              <WidgetAboutCard
                icon={<IconInnovation />}
                title={'Инновации'}
                descr={`Используем современные технологии для\u00A0удобства наших клиентов`}
              />
            </div>
          </Section>
          <Section>
            <SectionHead sectionType={ESectionHeadType.SMALL}>
              <Typography
                bold={700}
                type={ETypographyType.h1}
              >
                История компании
              </Typography>
            </SectionHead>
            <div className={styles.about__history}>
              <Typography
                tag="p"
                type={ETypographyType.p1}
              >
                <b>InsureFlow</b> — это современная страховая компания, основанная в 2024 году. Мы
                появились с целью изменить представление о страховании, сделав его простым, понятным
                и доступным для каждого. Наша миссия — не просто предоставлять страховые услуги, но
                и создавать уверенность в завтрашнем дне для наших клиентов.
              </Typography>
              <Typography
                tag="p"
                type={ETypographyType.p1}
              >
                Наша команда состоит из профессионалов с многолетним опытом в страховой сфере. Мы
                знаем, как важно чувствовать себя защищённым, и стремимся предложить решения,
                которые действительно работают. Начиная с небольшого офиса в Воронеже, мы быстро
                завоевали доверие клиентов благодаря честному подходу и качественному сервису.
              </Typography>
              <Typography
                tag="p"
                type={ETypographyType.p1}
              >
                С самого начала мы сделали ставку на технологии и клиентоориентированный подход.
                Наша онлайн-платформа позволяет оформить полис всего за несколько минут. А если у
                вас возникнут вопросы, наша служба поддержки всегда готова помочь. Мы работаем 24/7,
                чтобы вы могли получить помощь в любой момент.
              </Typography>
              <Typography
                tag="p"
                type={ETypographyType.p1}
              >
                Сегодня <b>InsureFlow</b> предлагает широкий спектр услуг: от классического
                страхования автомобилей и имущества до медицинского страхования. Мы понимаем, что у
                каждого клиента свои потребности, поэтому разрабатываем гибкие программы, которые
                подходят именно вам.
              </Typography>
              <Typography
                tag="h3"
                type={ETypographyType.h4}
                bold={700}
              >
                Наши планы на будущее:
              </Typography>
              <Typography
                tag="p"
                type={ETypographyType.p1}
              >
                Мы не останавливаемся на достигнутом. В планах компании:
              </Typography>
              <List>
                <li>
                  <Typography type={ETypographyType.p1}>
                    Расширение географии присутствия
                  </Typography>
                </li>
                <li>
                  <Typography type={ETypographyType.p1}>
                    Запуск новых страховых продуктов
                  </Typography>
                </li>
                <li>
                  <Typography type={ETypographyType.p1}>Улучшение сервиса</Typography>
                </li>
                <li>
                  <Typography type={ETypographyType.p1}>Выход на рынки других стран.</Typography>
                </li>
                <li>
                  <Typography type={ETypographyType.p1}>
                    Программы лояльности — бонусы и скидки для постоянных клиентов.
                  </Typography>
                </li>
              </List>
            </div>
          </Section>
        </Inner>
      </Section>
    </div>
  );
};

export default About;
