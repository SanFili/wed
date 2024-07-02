import "@/styles/globals.scss";
import localFont from "next/font/local";

const myFont = localFont({ src: "./Pilowlava-Regular.woff" });

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />{" "}
    </main>
  );
};

export default App;
