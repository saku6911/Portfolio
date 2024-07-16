import "@/styles/reset.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { FC } from "react";


const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="白取優花のPORTFOLIOサイト" />
        <meta property="or:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PORTFOLIO" />
        <meta property="og:description" content="白取優花のPORTFOLIOサイト" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#666"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#666"
        />
        <meta property="og:site_name" content="PORTFOLIO" />
        <meta property="og:image" content="" />
        <title>PORTFOLIO</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;