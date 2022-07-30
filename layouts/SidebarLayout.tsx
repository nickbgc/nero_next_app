import Head from 'next/head';
import { ReactProps } from 'types';

export default function SidebarLayout({ children, title }: ReactProps) {
  return (
    <>
      <Head>
        <title> {title} - Kryptonomic</title>
      </Head>
      {children}
    </>
  );
}
