import Navbar from "../components/NavBar/Nav";
import Footer from "../components/Footer/Footer";
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
