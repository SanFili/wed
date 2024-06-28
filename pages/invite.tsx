import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Contacts, Dresscode, Form, Info, Invite, MainPhoto, Schedule, Wishes } from "@/components/sections";
import { Loader } from "@/components/ui";
import { guests } from "@/data/guests";
import { GuestType } from "@/types/guests";

const Invitation = () => {
  const router = useRouter();
  const slug: string = router.query.slug as string;
  const info: GuestType = guests[slug] || guests.couple;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("slug", slug);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (loading) return <Loader />;

  return (
    <div className="main">
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
