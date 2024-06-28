import Image from "next/image";
import React from "react";

import styles from "./Wishes.module.scss";

const Schedule = () => {
  return (
    <section className={styles.wishes}>
      <div className={styles.wishes__flower}>
        <Image src="/images/flower2.svg" alt="flower" title="flower" width="295" height="290" />
      </div>
      <h2 className={styles.wishes__title}>ПОЖЕЛАНИЯ</h2>
      <p className={styles.wishes__text}>
        Лучшие подарки молодой семье — в&#160;конвертах.
        <br />А еще ваши улыбки&#160;;)
      </p>
      <p className={styles.wishes__text}>
        Пожалуйста, не дарите нам цветы, пусть ваши руки будут свободны для объятий.
      </p>
      <p className={styles.wishes__text}>Просим вас воздержаться от криков &ldquo;Горько&rdquo; - у нас сладко!</p>
    </section>
  );
};

export default Schedule;
