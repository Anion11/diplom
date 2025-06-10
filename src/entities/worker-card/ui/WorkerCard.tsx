import { FC } from 'react';

import { IWorkerCard } from '../model/IWorkerCard';

import styles from './WorkerCard.module.scss';

const WorkerCard: FC<IWorkerCard> = props => {
  const { id } = props;

  return <div className={styles.card}></div>;
};

export default WorkerCard;
