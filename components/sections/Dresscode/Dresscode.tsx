import Image from "next/image";

import { Button } from "@/components/ui";

import styles from "./Dresscode.module.scss";

const Dresscode = () => {
  return (
    <section className={styles.dresscode}>
      <h2>ДРЕСС-КОД</h2>
      <p>
        Мы создаем этот день с особым трепетом, поэтому будем благодарны, если в своих образах вы поддержите палитру
        нашего праздника:
      </p>
      <div className={styles.dresscode__colors}>
        <Image src="/images/colors.svg" alt="dress-code" title="dress-code" width="362" height="84" />
      </div>
      <p>
        <a>Пожалуйста, откажитесь в этот день от красного, ярко розового и черного.</a>
      </p>
      <p>Если у вас возникнут трудности с поиском, вы можете написать нам, мы с радостью поможем вам.</p>
      <Button className={styles.dresscode__button}>Посмотреть референсы</Button>
    </section>
  );
};

export default Dresscode;
