import { FC, useEffect } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import Typography from '../../typography/ui/Typography';
import { IModal } from '../model/IModal';

import style from './Modal.module.scss';

import ETypographyType from '@/shared/config/enums/ETypgraphyType';

const Modal: FC<IModal> = props => {
  const { children, onClose, className, contentClassName, isOpen, headText } = props;

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={clsx(style.modal, className && className)}>
          <motion.div
            className={style.modal__backdrop}
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className={style.modal__body}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 500,
              duration: 0.3
            }}
          >
            <div
              className={style.modal__close}
              onClick={handleClose}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.57662 3.2097C4.19315 2.90468 3.63868 2.93241 3.2863 3.29289L3.20499 3.3871C2.90682 3.77939 2.93393 4.34662 3.2863 4.70711L10.4144 12L3.2863 19.2929L3.20499 19.3871C2.90682 19.7794 2.93393 20.3466 3.2863 20.7071C3.66804 21.0976 4.28697 21.0976 4.66871 20.7071L12 13.2071L19.3313 20.7071C19.713 21.0976 20.332 21.0976 20.7137 20.7071C21.0661 20.3466 21.0932 19.7794 20.795 19.3871L20.7137 19.2929L13.5856 12L20.7137 4.70711C21.0661 4.34662 21.0932 3.77939 20.795 3.3871L20.7137 3.29289C20.3613 2.93241 19.8068 2.90468 19.4234 3.2097L19.3313 3.29289L12 10.7929L4.66871 3.29289L4.57662 3.2097Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {headText && (
              <div className={style.modal__head}>
                <Typography
                  type={ETypographyType.h4}
                  bold={700}
                >
                  {headText}
                </Typography>
              </div>
            )}

            <div className={clsx(style.modal__content, contentClassName && contentClassName)}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
