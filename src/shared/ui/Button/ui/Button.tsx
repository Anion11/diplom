import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Typography from '../../Typography/ui/Typography';
import { EButtonTypes, IButton } from '../model/IButton';

import styles from './Button.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';

const Button: FC<IButton> = props => {
  const { text, leftIcon, rightIcon, type, onClick, link, className, mods } = props;

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
            {leftIcon && (
              <div className={styles.button__icon}>
                <img
                  src={leftIcon}
                  alt=""
                />
              </div>
            )}
            <Typography
              type={ETypographyType.p1}
              className={styles.button__text}
            >
              {text}
            </Typography>
            {rightIcon && (
              <div className={styles.button__icon}>
                <img
                  src={rightIcon}
                  alt=""
                />
              </div>
            )}
          </Link>
        );
      default:
        return (
          <button
            className={clsx(
              styles.button,
              mods && styles[`button_${mods}`],
              className && className
            )}
            onClick={onClick}
          >
            {leftIcon && (
              <div className={styles.button__icon}>
                <img
                  src={leftIcon}
                  alt=""
                />
              </div>
            )}
            <Typography
              type={ETypographyType.p1}
              className={styles.button__text}
            >
              {text}
            </Typography>
            {rightIcon && (
              <div className={styles.button__icon}>
                <img
                  src={rightIcon}
                  alt=""
                />
              </div>
            )}
          </button>
        );
    }
  };

  return renderButton();
};

export default Button;
