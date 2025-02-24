import { PropsWithChildren } from 'react';

import style from './Wrapper.module.scss';

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Wrapper;
