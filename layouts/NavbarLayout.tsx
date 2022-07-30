import { KryptonomicLogo } from 'components/images';
import Head from 'next/head';
import Image from 'next/image';
import { ReactProps } from 'types';

const navigation = [{ name: 'Member Benefits', href: '/benefits' }];

export default function NavbarLayout({ children, title }: ReactProps) {
  return (
    <>
      <Head>
        <title> {title} - Kryptonomic</title>
      </Head>
      <header className="bg-indigo-600">
        <nav
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  className="w-auto h-10"
                  src={KryptonomicLogo}
                  layout="fill"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
              >
                Sign in
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
