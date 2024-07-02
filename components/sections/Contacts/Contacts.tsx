import Image from "next/image";

import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__photo}>
        <div className={styles.contacts__image}>
          <Image src="/images/photo2.png" alt="photo" title="photo" width="354" height="327" />
        </div>
        <div className={styles.contacts__frame}>
          <Image src="/images/frame.svg" alt="frame" title="frame" width="368" height="340" />
        </div>
        <p className={styles.contacts__text}>это мы ждем, когда вы подвердите приглашение</p>
        <div className={styles.contacts__love}>
          <p>с любовью, саша и коля</p>
          <div>
            <Image src="/images/heartPink.svg" alt="heart" title="heart" width="40" height="40" />
          </div>
        </div>
      </div>
      <p>По любым вопросам вы можете обратиться к нам, а также к нашему замечательному организатору</p>
      <p>
        Дарья{" "}
        <a href="tel:+79017443195">
          <span>+7(901)744-31-95</span>
        </a>
      </p>
    </section>
  );
};

export default Contacts;
