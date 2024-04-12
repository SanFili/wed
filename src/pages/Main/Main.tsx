import React from "react";
import "./Main.scss";
import { Button } from "src/components/ui";

const Main = () => {
  return (
    <div className="main">
      <section className="main__photo">
        <p>АЛЕКСАНДРА + НИКОЛАЙ</p>
        <p>SAVE OUR DATE</p>
        <p>01.09.2024</p>
      </section>
      <section className="main__invite">
        <h2>Дорогой друг</h2>
        <p>Приглашаем тебя разделить одино из важнейших событий в нашей жизни -- нашу свадьбу!</p>
        <p>Нам оченнь хотелось бы, чтобы в этот день ты был с нами</p>
      </section>
      <section className="main__info">
        <h2>Когда?</h2>
        <p>01.09.2024</p>
        <h2>Где?</h2>
        <p>В пизде</p>
      </section>
      <section className="main__schedule">
        <h2>План вечера</h2>
        <p>Сбор гостей</p>
        <p>Праздничный обед среди самых близких и важных нам людей</p>
        <p>Вечеринка, барбекю и веселье</p>
      </section>
      <section>
        <h2>Дресс-код</h2>
        <p>
          Мы очень старались, чтобы сделать этот праздник не только веселым и запоминаюзимся, но еще и красивым и нам
          будет очень приятно, если вы придержитесь данного дресс кода
        </p>
      </section>
      <section className="main__desire">
        <h2>Пожелания</h2>
        <p>Пожалуйста, не утруждайте себя поисками оригинального подарка, мы будем рады простым конвертам</p>
      </section>
      <section className="main__form">
        <h2>Пожалуйста, подтвердите свое присутствие</h2>
        <form action="">
          <input name="name" placeholder="ФИО" />
          Сможете ли вы присутствовать?
          <button type="submit">Отправить</button>
          <Button>Отправить</Button>
        </form>
      </section>
    </div>
  );
};

export default Main;
