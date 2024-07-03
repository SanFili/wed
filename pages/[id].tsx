import React, { useEffect, useState } from "react";

import { Contacts, Dresscode, Form, Info, Invite, MainPhoto, Schedule, Wishes } from "@/components/sections";
import { Loader } from "@/components/ui";
import { guests } from "@/data/guests";
import { GuestType } from "@/types/guests";

type StaticParamsType = {
  params: { id: string };
};

export async function getStaticProps({ params }: StaticParamsType) {
  return {
    props: {
      params,
    },
  };
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "friend" } }, // друзья
      { params: { id: "plus" } }, // с плюс 1
      { params: { id: "sh" } }, // Широких
      { params: { id: "sv" } }, // Свердловы
      { params: { id: "nt" } }, // Наталья
      { params: { id: "al" } }, // Алексей
      { params: { id: "ol" } }, // Олег
      { params: { id: "olg" } }, // Ольга
      { params: { id: "sr" } }, // Сергей
      { params: { id: "lil" } }, // Лиля
      { params: { id: "yr" } }, // Юровы
      { params: { id: "par" } }, // Леша и Андрей Парамоновы
      { params: { id: "gen" } }, // Геннадий
      { params: { id: "ni" } }, // Никита
    ],
    fallback: false,
  };
};

const Invitation = ({ params }: StaticParamsType) => {
  const slug = params.id;
  const info: GuestType = guests[slug];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("slug", slug);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div className="main">
      {loading && <Loader />}
      <MainPhoto />
      <Invite title={info.title} text={info.text} />
      <Info />
      <Schedule />
      <Dresscode />
      <Wishes />
      <Form items={info.formItems} slug={slug} />
      <Contacts />
    </div>
  );
};

export default Invitation;
