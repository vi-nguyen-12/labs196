import Head from "next/head";
import Disclaimer from "../components/Disclaimer/Disclaimer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Disclaimer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Disclaimer />
    </>
  );
}
