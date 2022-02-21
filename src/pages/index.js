import Head from "next/head";
import TopBanner from "../components/Home/TopBanner.js";
import MiddleSection from "../components/Home/MiddleSection";
import BottomSection from "../components/Home/BottomSection.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopBanner />
      <MiddleSection />
      <BottomSection />
    </>
  );
}
