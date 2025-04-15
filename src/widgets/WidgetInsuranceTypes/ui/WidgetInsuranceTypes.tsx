import { FC } from 'react';

import { IInsuranceTypes } from '../model/IInsuranceTypes';

import styles from './WidgetInsuranceTypes.module.scss';

const WidgetInsuranceTypes: FC<IInsuranceTypes> = props => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;

  return <div className={styles.steps}></div>;
};

export default WidgetInsuranceTypes;
