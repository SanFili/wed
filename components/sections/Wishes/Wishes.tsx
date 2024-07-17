import Image from "next/image";
import React from "react";
import cn from "classnames";

import styles from "./Wishes.module.scss";

const Schedule = () => {
  return (
    <section className={styles.wishes}>
      <div className={styles.wishes__flower}>
        <Image src="/images/flower2.svg" alt="flower" title="flower" width="295" height="290" />
      </div>
      <h2 className={styles.wishes__title}>ДЕТАЛИ</h2>
      <h3>ПОДАРКИ</h3>
      <p className={styles.wishes__text}>
        Лучшие подарки молодой семье — в&#160;конвертах.
        <br />А еще ваши улыбки{" "}
        <span className={styles.wishes__smile}>
          <Image src="/images/smile.svg" alt="smile" title="smile" width="20" height="20" />
        </span>
      </p>
      <h3>ЦВЕТЫ</h3>
      <p className={styles.wishes__text}>
        Пожалуйста, не дарите нам цветы, пусть ваши руки будут свободны для объятий.
      </p>
      <h3>ПОЖЕЛАНИЯ</h3>
      <p className={styles.wishes__text}>Просим вас воздержаться от криков &ldquo;Горько&rdquo; — у нас сладко!</p>
      <h3>ФОРМАТ</h3>
      <p className={cn(styles.wishes__text, styles.wishes__text_full)}>
        Наш праздник предполагает формат фуршетной вечеринки.
      </p>
    </section>
  );
};

export default Schedule;
