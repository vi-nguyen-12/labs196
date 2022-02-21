import Head from "next/head";
import TopBanner from "../components/About/TopBanner.js";
import MiddleSection from "../components/About/MiddleSection";
import BottomSection from "../components/About/BottomSection.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopBanner />
      <MiddleSection />
      <BottomSection />
    </>
  );
}
