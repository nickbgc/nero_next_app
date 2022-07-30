import Footer from 'components/footer';
import Navbar from 'components/navbar';
import Head from 'next/head';
import { ReactProps } from 'types';

export default function NavbarLayout({ children, title }: ReactProps) {
  return (
    <>
      <Head>
        <title> {title} - Kryptonomic</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
