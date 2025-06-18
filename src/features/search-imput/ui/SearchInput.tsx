import { FC, useState } from 'react';
import clsx from 'clsx';

import { ISearchInput } from '../model/ISearchInput';

import styles from './SearchInput.module.scss';

import Close from '@/shared/assets/icons/icon_close.svg?react';
import { Button, Input } from '@/shared/ui';

const WorkerSearchInput: FC<ISearchInput> = props => {
  const { value, onChange, onSearch, placeholder } = props;
  const [localValue, setLocalValue] = useState(value);

  const handleInputChange = (value: string) => {
    setLocalValue(value);
    onChange(value);
  };

  const handleSearchClick = () => {
    onSearch(localValue.trim());
  };

  const onClear = () => {
    setLocalValue('');
    onChange('');
    onSearch('');
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <Input
          placeholder={placeholder}
          value={localValue}
          onChange={handleInputChange}
          name="query"
        />
        {value && (
          <button
            type="button"
            className={styles.search__clear}
            onClick={onClear}
            aria-label="Очистить"
          >
            <Close />
          </button>
        )}
      </div>

      <Button
        text="Найти"
        onClick={handleSearchClick}
        className={clsx(styles.search__btn)}
        disabled={!localValue.trim()}
      />
    </div>
  );
};

export default WorkerSearchInput;
