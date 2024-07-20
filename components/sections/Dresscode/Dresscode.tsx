import Image from "next/image";
import cn from "classnames";
import { Button } from "@/components/ui";

import styles from "./Dresscode.module.scss";

const colors = [
  {
    color: "silver",
    width: 200,
    height: 280,
  },
  {
    color: "pink",
    width: 180,
    height: 180,
  },
  {
    color: "orange",
    width: 200,
    height: 200,
  },
  {
    color: "yellow",
    width: 310,
    height: 310,
  },
  {
    color: "flower",
    width: 180,
    height: 180,
  },
  {
    color: "blue",
    width: 200,
    height: 200,
  },
  {
    color: "violet",
    width: 200,
    height: 200,
  },
];

const Dresscode = () => {
  return (
    <section className={styles.dresscode}>
      <h2>
        ДРЕСС-КОД
        <br />
        <span>коктейльный</span>
      </h2>
      <p>
        Мы создаем этот день с особым трепетом, поэтому просим вас поддержать общую атмосферу праздника в ваших образах.
        Мы собрали немного вдохновения для вас , а так же подготовили цветовую палитру:
      </p>
      <div className={styles.dresscode__flowers}>
        {colors.map((el) => (
          <div className={cn(styles.dresscode__color, styles[`dresscode__color_${el.color}`])} key={el.color}>
            <Image
              src={`/images/colors/${el.color}.svg`}
              alt={el.color}
              title={el.color}
              width={el.width}
              height={el.height}
            />
          </div>
        ))}
      </div>
      <p>
        <a>
          Пожалуйста, откажитесь в этот день от черного и фуксии, также просим девушек воздержаться от белого цвета.
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
