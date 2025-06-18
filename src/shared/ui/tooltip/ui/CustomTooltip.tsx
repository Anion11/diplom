import { FC, ReactElement, useState } from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import styles from './CustomTooltip.module.scss';

interface ITooltip extends TooltipProps {
  children: ReactElement;
}

const CustomTooltip: FC<ITooltip> = props => {
  const { children, ...tooltipProps } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      {...tooltipProps}
      open={open}
      onClose={handleClose}
      onMouseEnter={handleClick}
      onClick={handleClick}
      classes={{
        tooltip: styles.tooltip,
        arrow: styles.tooltip__arrow
      }}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
