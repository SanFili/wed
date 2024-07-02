import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Form } from "@/components/sections";
import { guests } from "@/data/guests";
import { GuestType } from "@/types/guests";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.id as string;
  return {
    props: {
      slug,
    },
  };
};

const Quiz: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ slug }) => {
  const info: GuestType = guests[slug] || guests.couple;

  return <Form items={info.formItems} slug={slug} />;
};

export default Quiz;
