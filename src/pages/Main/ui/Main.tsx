import { Outlet } from 'react-router-dom';

import styles from './style.module.scss';

const Main = () => {
  return (
    <>
      <div className={styles.main}></div>
      <Outlet />
    </>
  );
};

export default Main;
