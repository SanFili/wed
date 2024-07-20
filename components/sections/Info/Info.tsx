import { Button } from "@/components/ui";

import styles from "./Info.module.scss";

const Info = () => {
  return (
    <section className={styles.info}>
      <h2>МЕСТО ПРОВЕДЕНИЯ</h2>
      <p>
        Свадьба будет проходить на загородной площадке <span>The&#160;Birch</span>
      </p>
      <div className={styles.info__map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8008f7906f68fd2e9dba9ce8f604a579efe0970a9b063ea943954c20545ad1c6&amp;source=constructor"
          frameBorder="0"
        ></iframe>
      </div>
      <Button href="https://yandex.ru/maps/?ll=37.048725%2C56.099677&pt=37.048725%2C56.099677&z=12" target="_blanc">
        Построить маршрут
      </Button>
    </section>
  );
};

export default Info;
