import Image from "next/image";

import styles from "./MainPhoto.module.scss";

const MainPhoto = () => {
  return (
    <section className={styles.photo}>
      <div className={styles.photo__background}>
        <div>
          <Image src="/images/background.svg" alt="back" title="back" width="479" height="373" />
        </div>
      </div>
      <div className={styles.photo__image}>
        <Image src="/images/photo.jpg" alt="photo" title="photo" width="345" height="345" />
      </div>
      <div className={styles.photo__content}>
        <div className={styles.photo__frame}>
          <Image src="/images/frame.svg" alt="frame" title="frame" width="368" height="340" />
        </div>
        <h1 className={styles.photo__title}>
          W<span>E</span>DD NG
        </h1>
        <p className={styles.photo__date}>
          25
          <br />•<br />
          08
          <br />
        </p>
      </div>
    </section>
  );
};

export default MainPhoto;
