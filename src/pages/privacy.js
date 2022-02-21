import Head from "next/head";
import Privacy from "../components/Privacy/Privacy.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Privacy />
    </>
  );
}
