import { Form } from "@/components/sections";
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
    paths: [{ params: { id: "friend" } }, { params: { id: "couple" } }],
    fallback: false,
  };
};

const Quiz = ({ params }: StaticParamsType) => {
  const slug = params.id;
  const info: GuestType = guests[slug];

  return <Form items={info.formItems} slug={slug} />;
};

export default Quiz;
