import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import styles from './CustomTooltip.module.scss';

interface ITooltip extends TooltipProps {
  children: ReactElement;
}

const CustomTooltip: FC<ITooltip> = ({ children, ...tooltipProps }) => {
  const isTouch = useMediaQuery('(hover: none)');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open || !isTouch) return;

    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open, isTouch]);

  return (
    <Tooltip
      {...tooltipProps}
      open={open}
      onClose={() => setOpen(false)}
      disableHoverListener={isTouch}
      disableTouchListener={!isTouch}
      onMouseEnter={() => !isTouch && setOpen(true)}
      onMouseLeave={() => !isTouch && setOpen(false)}
      leaveTouchDelay={0}
      classes={{ tooltip: styles.tooltip, arrow: styles.tooltip__arrow }}
    >
      {React.cloneElement(children, {
        ref: (node: HTMLElement) => {
          wrapperRef.current = node;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { ref } = children as any;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        },
        onClick: (e: React.MouseEvent) => {
          if (isTouch) setOpen(o => !o);
          children.props.onClick?.(e);
        }
      })}
    </Tooltip>
  );
};

export default CustomTooltip;
