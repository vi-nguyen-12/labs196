import Head from "next/head";
import Terms from "../components/Terms/Terms.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Terms />
    </>
  );
}
