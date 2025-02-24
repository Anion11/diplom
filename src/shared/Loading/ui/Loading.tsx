import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
