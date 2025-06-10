import { FC, useEffect, useRef } from 'react';
import clsx from 'clsx';
import InfiniteMarquee from 'infinite-marquee';

import { IMarquee } from '../model/IMarquee';

const Marquee: FC<IMarquee> = props => {
  const { children, className, speed = 20, direction = 'left' } = props;
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const params = {
        el: marqueeRef.current,
        direction: direction,
        duration: speed,
        css: false
      };

      new InfiniteMarquee(params);
    }
  }, [direction, speed]);

  return (
    <div
      ref={marqueeRef}
      className={clsx('marquee', className && className)}
    >
      <div className="marquee-inner">
        <div className="marquee-content">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
