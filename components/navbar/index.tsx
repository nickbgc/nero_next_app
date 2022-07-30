import { KryptonomicLogo } from 'components/images';
import { ApplicationContext } from 'context/ApplicationContext';
import Image from 'next/image';
import { useContext } from 'react';

const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Member Benefits',
    href: '/benefits',
  },
];

export default function Navbar() {
  const { login, user } = useContext(ApplicationContext);
  return (
    <header className="bg-light_background">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-3 border-b border-zinc-500 lg:border-none">
          <div className="flex items-center">
            <div className="relative w-8 h-8">
              <a href="#">
                <Image layout="fill" src={KryptonomicLogo} alt="" />
              </a>
            </div>
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
            {!(user as any)?.address && (
              <button
                onClick={login}
                className="inline-block px-6 py-1 text-base font-medium text-white rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"
              >
                Sign in
              </button>
            )}
            {(user as any)?.address && (
              <button
                onClick={login}
                className="inline-block px-6 py-1 text-base font-medium text-white rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"
              >
                {(user as any)?.address.substring(0, 6)}...
                {(user as any)?.address.substring(
                  (user as any)?.address.length - 4,
                )}
              </button>
            )}
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
  );
}
