import { FC } from 'react';

import styles from './WidgetGetWorkers.module.scss';

import useGetWorkers from '@/shared/hooks/useGetWorkers';

const WidgetGetWorkers: FC = () => {
  const { loading, getWorkers } = useGetWorkers();

  const handleSubmit = () => {
    getWorkers();
  };

  return (
    <div className={styles.container}>
      <button onClick={handleSubmit}>qwe</button>
    </div>
  );
};

export default WidgetGetWorkers;
