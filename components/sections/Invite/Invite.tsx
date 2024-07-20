import React, { FC } from "react";

import styles from "./Invite.module.scss";

type InviteProps = {
  title: string;
  text: string;
};

const Invite: FC<InviteProps> = ({ title, text }) => {
  return (
    <section className={styles.invite}>
      <h2>{title}</h2>
      <p>
        С радостью приглашаем {text} на нашу свадьбу, которая состоится <span>25 августа 2024 года</span>. Мы будем
        очень рады видеть вас в этот особенный для нас день и разделить радость нашего союза.
      </p>
    </section>
  );
};

export default Invite;
