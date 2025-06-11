import { FC } from 'react';

import styles from './WidgetGetWorkers.module.scss';

import WorkerCard from '@/entities/worker-card/ui/WorkerCard';
import EmptySvg from '@/shared/assets/icons/empty.svg?react';
import ERoles from '@/shared/config/enums/ERoles';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';
import { IWorker } from '@/shared/config/interfaces/Worker/IWorker';
import useGetWorkers from '@/shared/hooks/useGetWorkers';
import { Button, SectionHead, Typography } from '@/shared/ui';
import { ESectionHeadType } from '@/shared/ui/section-head/model/ISectionHead';

const WidgetGetWorkers: FC = () => {
  const { loading, workers, getWorkers, hasMore } = useGetWorkers();

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      getWorkers();
    }
  };

  const MOCK_WORKERS: IWorker[] = [
    {
      id: 1,
      createdAt: '2025-01-01T12:00:00Z',
      roles: [{ role: ERoles.WORKER }],
      username: 'worker1',
      password: 'pass1',
      email: 'worker1@example.com',
      phone: '+1234567890',
      person: {
        id: 101,
        name: 'Иван',
        secondName: 'Иванович',
        surname: 'Иванов',
        birthDate: new Date('1980-05-15'),
        documents: [
          {
            id: 201,
            serial: 'AB',
            number: '123456',
            authority: 'ГУ МВД',
            dateIssue: '2000-01-01',
            type: 'Паспорт'
          },
          {
            id: 202,
            serial: 'AB',
            number: '123456',
            authority: 'ГУ МВД',
            dateIssue: '2000-01-01',
            type: 'Снилс'
          }
        ]
      },
      isBlocked: false,
      blocked: false
    },
    {
      id: 2,
      createdAt: '2025-02-02T12:00:00Z',
      roles: [{ role: ERoles.WORKER }],
      username: 'worker2',
      password: 'pass2',
      email: 'worker2@example.com',
      phone: '+1234567891',
      person: {
        id: 102,
        name: 'Пётр',
        secondName: 'Петрович',
        surname: 'Петров',
        birthDate: new Date('1985-07-20'),
        documents: [
          {
            id: 202,
            serial: 'CD',
            number: '654321',
            authority: 'МВД России',
            dateIssue: '2005-05-05',
            type: 'Паспорт'
          }
        ]
      },
      isBlocked: false,
      blocked: false
    },
    {
      id: 3,
      createdAt: '2025-03-03T12:00:00Z',
      roles: [{ role: ERoles.WORKER }],
      username: 'worker3',
      password: 'pass3',
      email: 'worker3@example.com',
      phone: '+1234567892',
      person: {
        id: 103,
        name: 'Мария',
        secondName: 'Александровна',
        surname: 'Смирнова',
        birthDate: new Date('1990-11-10'),
        documents: [
          {
            id: 203,
            serial: 'EF',
            number: '789012',
            authority: 'ГУФМС',
            dateIssue: '2010-10-10',
            type: 'Паспорт'
          }
        ]
      },
      isBlocked: false,
      blocked: false
    },
    {
      id: 4,
      createdAt: '2025-04-04T12:00:00Z',
      roles: [{ role: ERoles.WORKER }],
      username: 'worker4',
      password: 'pass4',
      email: 'worker4@example.com',
      phone: '+1234567893',
      person: {
        id: 104,
        name: 'Ольга',
        secondName: 'Сергеевна',
        surname: 'Кузнецова',
        birthDate: new Date('1988-03-25'),
        documents: [
          {
            id: 204,
            serial: 'GH',
            number: '345678',
            authority: 'МВД',
            dateIssue: '2008-08-08',
            type: 'Паспорт'
          }
        ]
      },
      isBlocked: false,
      blocked: false
    },
    {
      id: 5,
      createdAt: '2025-05-05T12:00:00Z',
      roles: [{ role: ERoles.WORKER }],
      username: 'worker5',
      password: 'pass5',
      email: 'worker5@example.com',
      phone: '+1234567894',
      person: {
        id: 105,
        name: 'Алексей',
        secondName: 'Николаевич',
        surname: 'Попов',
        birthDate: new Date('1979-12-12'),
        documents: [
          {
            id: 205,
            serial: 'IJ',
            number: '901234',
            authority: 'ГУ МВД',
            dateIssue: '1999-09-09',
            type: 'Паспорт'
          }
        ]
      },
      isBlocked: false,
      blocked: false
    },
    {
      id: 6,
      createdAt: '2025-06-06T12:00:00Z',
      roles: [{ role: ERoles.WORKER }],
      username: 'worker6',
      password: 'pass6',
      email: 'worker6@example.com',
      phone: '+1234567895',
      person: {
        id: 106,
        name: 'Наталья',
        secondName: 'Викторовна',
        surname: 'Лебедева',
        birthDate: new Date('1992-09-30'),
        documents: [
          {
            id: 206,
            serial: 'KL',
            number: '567890',
            authority: 'МВД РФ',
            dateIssue: '2012-12-12',
            type: 'Паспорт'
          }
        ]
      },
      isBlocked: false,
      blocked: false
    }
  ];

  return (
    <div className={styles.container}>
      <SectionHead sectionType={ESectionHeadType.SMALL}>
        <Typography
          type={ETypographyType.h3}
          bold={700}
        >
          Список сотрудников
        </Typography>
      </SectionHead>
      {MOCK_WORKERS && MOCK_WORKERS.length > 0 ? (
        <div className={styles.container__wrapper}>
          <div className={styles.container__content}>
            {MOCK_WORKERS.map((worker, index) => (
              <WorkerCard
                key={index}
                data={worker}
              />
            ))}
          </div>
          {hasMore && (
            <Button
              loading={loading}
              className={styles.container__btn}
              onClick={handleLoadMore}
              text="Показать еще"
            ></Button>
          )}
        </div>
      ) : (
        <div className={styles.container__empty}>
          <EmptySvg />
          <div className={styles.container__emptyText}>
            <Typography
              type={ETypographyType.h5}
              bold={700}
              tag="h4"
            >
              Сотрудники не найдены
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetGetWorkers;
