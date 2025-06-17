import { FC } from 'react';
import clsx from 'clsx';

import { ICheckbox } from '../model/ICheckbox';

import styles from './Checkbox.module.scss';

const Checkbox: FC<ICheckbox> = props => {
  const { children, id, name, error, disabled = false, formError, isChecked, onChange } = props;

  return (
    <div className={styles.checkboxWrapper}>
      <div className={clsx(styles.checkbox, (error || formError) && styles.checkbox_invalid)}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={isChecked}
          disabled={disabled}
          onChange={onChange}
        />
        <label htmlFor={id}>
          {children}
          <span className={styles.checkbox__icon}></span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
