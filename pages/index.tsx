import Link from "next/link";
// import { useRouter } from "next/router";
import React from "react";

import { Button } from "@/components/ui";

const Home = () => {
  //  const router = useRouter();
  // const [slug, setSlug] = useState<string | null>(null);

  // useEffect(() => {
  //  const s = localStorage.getItem("slug");
  // router.push({ pathname: "/invite", query: { slug: s || "friend" } });
  // setSlug(s);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //}, []);

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Link
        // href={{
        //   pathname: "/invite",
        //   query: { slug: slug || "friend" },
        // }}
        href="/invite"
        passHref
      >
        <Button>Открыть приглашение</Button>
      </Link>
    </div>
  );
};

export default Home;
