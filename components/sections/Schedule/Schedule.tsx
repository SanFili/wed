import Image from "next/image";
import React from "react";

import styles from "./Schedule.module.scss";

const Schedule = () => {
  return (
    <section className={styles.schedule}>
      <div className={styles.schedule__circles}>
        {Array.from(Array(5).keys()).map((el) => (
          <div key={el} />
        ))}
      </div>
      <h2 className={styles.schedule__title}>ПЛАН ВЕЧЕРА</h2>
      <div className={styles.schedule__row}>
        <p className={styles.schedule__time}>15:00</p>
        <p className={styles.schedule__text}>—</p>
        <p className={styles.schedule__text}>собираемся и обнимаемся</p>
      </div>
      <div className={styles.schedule__row}>
        <p className={styles.schedule__time}>16:00</p>
        <p className={styles.schedule__text}>—</p>
        <p className={styles.schedule__text}>плачем на церемонии</p>
      </div>
      <div className={styles.schedule__row}>
        <p className={styles.schedule__time}>до 00:00</p>
        <p className={styles.schedule__text}>—</p>
        <p className={styles.schedule__text}>едим, пьем, танцуем, веселимся</p>
      </div>
      <div className={styles.schedule__flower}>
        <Image src="/images/flower1.svg" alt="flower" title="flower" width="228" height="231" />
      </div>
      <div className={styles.schedule__heart}>
        <Image src="/images/heart.svg" alt="heart" title="heart" width="40" height="40" />
      </div>
    </section>
  );
};

export default Schedule;
