import { GetStaticPaths } from "next";
import { Form } from "@/components/sections";
import { guests } from "@/data/guests";
import { GuestType } from "@/types/guests";

export async function getStaticProps({ params }: { params: string }) {
  return {
    props: {
      params,
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const Quiz = ({ params }: { params: string }) => {
  const info: GuestType = guests[params] || guests.couple;

  return <Form items={info.formItems} slug={params} />;
};

export default Quiz;
