import "@/styles/globals.scss";
import NextHead from "next/head";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title key="title">A+N WEDDGIN 25.08</title>
        <meta property="og:title" content="A+N WEDDING 25.08" key="og:title" />
      </NextHead>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
