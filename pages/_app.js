import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>J Autos Store </title>
          <meta name="description" content="J-Auto automobile store" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
