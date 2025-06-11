import { FC } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import clsx from 'clsx';

import Typography from '../../typography/ui/Typography';
import { EButtonTypes, IButton } from '../model/IButton';

import styles from './Button.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';

const Button: FC<IButton> = props => {
  const { text, leftIcon, rightIcon, type, onClick, link, className, mods, disabled, loading } =
    props;

  const renderButton = () => {
    switch (type) {
      case EButtonTypes.LINK:
        return (
          <Link
            className={clsx(
              styles.button,
              Array.isArray(mods)
                ? mods.map(mod => styles[`button_${mod}`]).join(' ')
                : mods && styles[`button_${mods}`],
              className && className
            )}
            to={link ? link : '/'}
            onClick={onClick}
          >
            {leftIcon && <div className={styles.button__icon}>{leftIcon}</div>}
            {text && (
              <Typography
                type={ETypographyType.p1}
                className={styles.button__text}
              >
                {text}
              </Typography>
            )}

            {rightIcon && <div className={styles.button__icon}>{rightIcon}</div>}
          </Link>
        );
      default:
        return (
          <button
            className={clsx(
              styles.button,
              Array.isArray(mods)
                ? mods.map(mod => styles[`button_${mod}`]).join(' ')
                : mods && styles[`button_${mods}`],
              className && className,
              loading && styles[`button_loading`]
            )}
            onClick={onClick}
            disabled={disabled}
          >
            {leftIcon && <div className={styles.button__icon}>{leftIcon}</div>}
            {text && (
              <Typography
                type={ETypographyType.p1}
                className={styles.button__text}
              >
                {text}
              </Typography>
            )}
            {rightIcon && <div className={styles.button__icon}>{rightIcon}</div>}
          </button>
        );
    }
  };

  return renderButton();
};

export default Button;
