import React, { forwardRef, useState } from 'react';
import InputMask from 'react-input-mask';
import clsx from 'clsx';

import Typography from '../../typography/ui/Typography';
import { InputProps } from '../model/IInput';

import styles from './Input.module.scss';

import CloseEye from '@/shared/assets/icons/icon_close_eye.svg?react';
import Eye from '@/shared/assets/icons/icon_eye.svg?react';
import ETypographyType from '@/shared/config/enums/ETypgraphyType';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    type = 'text',
    name,
    placeholder,
    value,
    onChange,
    error,
    disabled = false,
    formError
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={styles.inputWrapper}>
      <div
        className={clsx(
          styles.input,
          error && styles.input_invalid,
          formError && styles.input_invalid,
          value && styles.input_filled
        )}
      >
        {type === 'tel' ? (
          <InputMask
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            mask="+7 (999) 999-99-99"
            maskChar="_"
            className={styles.input__field}
            inputRef={ref}
          />
        ) : (
          <input
            type={inputType}
            name={name}
            value={value ?? ''}
            id={id}
            ref={ref}
            onChange={handleChange}
            disabled={disabled}
          />
        )}
        <label htmlFor={id}>{placeholder}</label>
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className={styles.input__toggle}
          >
            {showPassword ? <CloseEye /> : <Eye />}
          </button>
        )}
      </div>
      {error && (
        <div className={styles.input__error}>
          <Typography type={ETypographyType.p3}>{error}</Typography>
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
