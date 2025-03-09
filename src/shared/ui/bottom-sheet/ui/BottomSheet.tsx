import { FC, PointerEvent, useEffect } from 'react';
import clsx from 'clsx';
import { motion, PanInfo, useAnimate, useDragControls } from 'framer-motion';

import { IBottomSheet } from '../model/IBottomSheet';

import style from './BottomSheet.module.scss';

const BottomSheet: FC<IBottomSheet> = props => {
  const { children, onClose, className, isMenuClose, setMenuClose, contentClassName } = props;

  const [contentScope, animate] = useAnimate();
  const controls = useDragControls();

  useEffect(() => {
    animate(contentScope.current, { y: 0 }, { duration: 0.3 });
    document.documentElement.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    if (isMenuClose) {
      animate(contentScope.current, { y: '100%' }, { duration: 0.3 });
      document.documentElement.style.overflow = 'auto';
    }
  }, [isMenuClose]);

  const handleClose = () => {
    animate(contentScope.current, { y: '100%' }, { duration: 0.3 });
    setTimeout(onClose, 300);
    if (setMenuClose) {
      setMenuClose(true);
    }
    document.documentElement.style.overflow = 'auto';
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, i: PanInfo) => {
    const offset = i.offset.y;
    const modalHeight = contentScope.current.getBoundingClientRect().height;

    if (offset >= modalHeight * 0.3) {
      handleClose();
    } else {
      animate(contentScope.current, { y: 0 }, { duration: 0.3 });
    }
  };

  const startDrag = (event: PointerEvent) => {
    controls.start(event);
  };

  return (
    <div className={clsx(style.modal, className && className)}>
      <motion.div
        className={style.modal__backdrop}
        onClick={handleClose}
      />
      <motion.div
        className={style.modal__body}
        drag="y"
        dragListener={false}
        dragControls={controls}
        dragDirectionLock
        onDragEnd={handleDragEnd}
        ref={contentScope}
        dragElastic={false}
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: window.innerHeight
        }}
        initial={{ y: '100%' }}
      >
        <div
          className={style.modal__head}
          onPointerDown={startDrag}
        >
          <div className={style.modal__bar}></div>
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
        </div>
        <div className={clsx(style.modal__content, contentClassName && contentClassName)}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default BottomSheet;
