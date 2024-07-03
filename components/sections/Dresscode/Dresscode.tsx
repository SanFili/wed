import Image from "next/image";
import cn from "classnames";
import { Button } from "@/components/ui";

import styles from "./Dresscode.module.scss";

const Dresscode = () => {
  return (
    <section className={styles.dresscode}>
      <h2>ДРЕСС-КОД</h2>
      <p>
        Мы создаем этот день с особым трепетом, поэтому просим вас поддержать общую атмосферу праздника в ваших образах.
        Мы собрали немного вдохновения для вас , а так же подготовили цветовую палитру:
      </p>
      {/* <div className={styles.dresscode__colors}>
        <Image src="/images/colors.svg" alt="dress-code" title="dress-code" width="362" height="84" />
      </div> */}
      <div className={styles.dresscode__flowers}>
        <div className={cn(styles.dresscode__color, styles.dresscode__color_silver)}>
          <Image src="/images/colors/silver.svg" alt="dress-code" title="dress-code" width="200" height="280" />
        </div>
        <div className={cn(styles.dresscode__color, styles.dresscode__color_pink)}>
          <Image src="/images/colors/pink.svg" alt="dress-code" title="dress-code" width="180" height="180" />
        </div>
        <div className={cn(styles.dresscode__color, styles.dresscode__color_orange)}>
          <Image src="/images/colors/orange.svg" alt="dress-code" title="dress-code" width="200" height="200" />
        </div>
        <div className={cn(styles.dresscode__color, styles.dresscode__color_yellow)}>
          <Image src="/images/colors/yellow.svg" alt="dress-code" title="dress-code" width="310" height="310" />
        </div>
        <div className={cn(styles.dresscode__color, styles.dresscode__color_yellow2)}>
          <Image src="/images/colors/flower.svg" alt="dress-code" title="dress-code" width="180" height="180" />
        </div>
        <div className={cn(styles.dresscode__color, styles.dresscode__color_blue)}>
          <Image src="/images/colors/blue.svg" alt="dress-code" title="dress-code" width="200" height="200" />
        </div>
        <div className={cn(styles.dresscode__color, styles.dresscode__color_violet)}>
          <Image src="/images/colors/violet.svg" alt="dress-code" title="dress-code" width="200" height="200" />
        </div>
      </div>
      <p>
        <a>
          Пожалуйста, откажитесь в этот день от черного и ярко-розового, также просим девушек воздержаться от белого
          цвета.
        </a>
      </p>
      <p>Если у вас возникнут трудности с поиском, вы можете написать нам, мы с радостью поможем вам.</p>
      <Button
        href="https://ru.pinterest.com/sandisaniiiiiiii/wedding-guest/?invite_code=10e61ec424344255929d1f647187dba9&sender=1123648313187480189"
        target="_blanc"
        className={styles.dresscode__button}
      >
        Посмотреть референсы
      </Button>
    </section>
  );
};

export default Dresscode;
