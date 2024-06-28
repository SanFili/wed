import cn from "classnames";

import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.loader__text}>Loading...</span>
      <div className={styles.loader__spinner}>
        <div className={cn(styles.loader__dot, styles.loader__dot_orange)} />
        <div className={cn(styles.loader__dot, styles.loader__dot_pink)} />
        <div className={cn(styles.loader__dot, styles.loader__dot_yellow)} />
      </div>
    </div>
  );
};

export default Loader;
