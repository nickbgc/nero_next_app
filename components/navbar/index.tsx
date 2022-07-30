import { KryptonomicLogo } from 'components/images';
import { ApplicationContext } from 'context/ApplicationContext';
import Image from 'next/image';
import { useContext } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Member Benefits',
    href: '/benefits',
  },
  {
    name: 'App',
    href: '/app',
    protected: true,
  },
];

const AuthenticatedButton = () => {
  const { user, logout } = useContext(ApplicationContext);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-orange-500">
          {(user as any)?.address.substring(0, 6)}...
          {(user as any)?.address.substring(
            (user as any)?.address.length - 4,
          )}{' '}
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 text-white origin-top-right rounded-md shadow-lg bg-background ring-1 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logout}
                  className={classNames(
                    active ? 'bg-light_background text-white' : 'text-gray-100',
                    'block px-4 py-2 text-sm w-full text-left',
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

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
              {navigation.map((link) => {
                return link.protected ? (
                  user && (
                    <a
                      key={link.name}
                      href={link.href}
                      className="p-1 text-base font-medium text-white hover:text-indigo-50"
                    >
                      {link.name}
                    </a>
                  )
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                );
              })}
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
            {(user as any)?.address && <AuthenticatedButton />}
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
