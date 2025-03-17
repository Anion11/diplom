import { FC } from 'react';

import { ISteps } from '../model/ISteps';

import styles from './WidgetSteps.module.scss';

const WidgetSteps: FC<ISteps> = props => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;

  return <div className={styles.steps}></div>;
};

export default WidgetSteps;
