/* eslint-disable @next/next/no-img-element */
import { ApplicationContext } from 'context/ApplicationContext';
import Head from 'next/head';
import { useContext } from 'react';
import { ReactProps } from 'types';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  MailIcon,
  AdjustmentsIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
  BellIcon,
  MapIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { useDisclosure } from 'hooks';
import { KryptonomicLogo } from 'components/images';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/app', icon: HomeIcon, current: true },
  { name: 'Explore', href: '/app/community', icon: MapIcon, current: false },
  {
    name: 'Token',
    href: '/app/token',
    icon: BellIcon,
    current: false,
  },
  {
    name: 'Messages',
    href: '/app/messages',
    icon: MailIcon,
    current: false,
  },
  {
    name: 'Settings',
    href: '/app/settings',
    icon: AdjustmentsIcon,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SidebarLayout({ children, title }: ReactProps) {
  const { user, logout } = useContext(ApplicationContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title> {title} - Kryptonomic</title>
      </Head>
      <div>
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={onClose}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-opacity-75 bg-sidebar-background" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs bg-sidebar-background">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="relative flex items-center flex-shrink-0 w-6 h-6 ml-4">
                      <Image
                        src={KryptonomicLogo}
                        alt="Workflow"
                        layout="fill"
                      />
                    </div>
                    <nav className="px-2 mt-5 space-y-1">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={classNames(
                              item.current
                                ? 'bg-sidebar-background text-white'
                                : 'text-white hover:bg-background hover:bg-opacity-75',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                            )}
                          >
                            <item.icon
                              className="flex-shrink-0 w-6 h-6 mr-4 text-gray-300"
                              aria-hidden="true"
                            />

                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 p-4 ">
                    <a href="#" className="flex-shrink-0 block group">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-white">
                            {(user as any)?.address?.substring(0, 6)}...
                            {(user as any)?.address?.substring(
                              (user as any)?.address?.length - 4,
                            )}{' '}
                          </p>
                          <p
                            onClick={logout}
                            className="text-sm font-medium text-gray-200 group-hover:text-white"
                          >
                            Logout
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 min-h-0 bg-sidebar-background">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="relative flex items-center flex-shrink-0 w-6 h-6 px-4">
                <Image src={KryptonomicLogo} alt="Kryptonomic" />
              </div>
              <nav className="flex-1 px-2 mt-5 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        item.current
                          ? 'bg-sidebar-background text-white'
                          : 'text-white hover:bg-background hover:bg-opacity-75',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                      )}
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 mr-4 text-gray-200"
                        aria-hidden="true"
                      />

                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 border-t border-background">
              <a href="#" className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block rounded-full h-9 w-9"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {(user as any)?.address?.substring(0, 6)}...
                      {(user as any)?.address?.substring(
                        (user as any)?.address?.length - 4,
                      )}{' '}
                    </p>
                    <p
                      onClick={logout}
                      className="text-xs font-medium text-indigo-200 group-hover:text-white"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 md:pl-64">
          <div className="sticky top-0 z-10 flex items-center gap-4 pt-1 pl-1 text-white bg-light_background md:hidden sm:pl-3 sm:pt-3">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={onOpen}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <h3 className="text-xl font-bold">Kryptonomic</h3>
          </div>
          <main className="flex flex-1 pt-0 pb-4">
            <div className="container flex-1">{children}</div>
            <div className="flex-col hidden p-4 w-96 lg:flex">
              <div className="relative flex items-center mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <SearchIcon className="w-4 h-4 text-gray-300" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-8 pr-12 border rounded-md border-light_background bg-card-light_background sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-2">
                  <kbd className="inline-flex items-center px-2 font-sans text-sm font-medium text-gray-400 border border-gray-200 rounded">
                    ⌘K
                  </kbd>
                </div>
              </div>
              <div className="py-8">
                <div className="p-3 text-gray-200 rounded-md bg-light_background">
                  <h3 className="py-2 text-xl font-bold text-white">
                    Community Highlights
                  </h3>
                  <div className="flex items-center gap-2 py-2 text-gray-100">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://i.pravatar.cc/300?img=34"
                      alt="User 3"
                    />
                    <p className="font-semibold text-white">Greg Snow</p> &bull;{' '}
                    <span className="text-sm text-gray-300">8h ago</span>
                  </div>
                  <p className="py-1">
                    Last night was unreal, front row or bust!
                  </p>
                  <div className="py-2">
                    <img
                      src="https://images.pexels.com/photos/7974892/pexels-photo-7974892.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="User 3"
                      className="object-cover w-full h-64 rounded-md"
                    />
                  </div>
                  <p className="py-2 font-semibold text-white">Show more</p>
                </div>
              </div>
              <div className="py-8">
                <div className="p-3 text-gray-200 rounded-md bg-light_background">
                  <h3 className="py-2 pb-4 text-xl font-bold text-white">
                    More from Nero
                  </h3>

                  <div className="relative h-64 ">
                    <img
                      src="https://images.pexels.com/photos/9809837/pexels-photo-9809837.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="User 3"
                      className="object-cover w-full h-64 rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-16 px-3 py-2 bg-gradient-to-t from-black">
                      Behind the Curtains
                    </div>
                  </div>
                  <div className="py-4" />
                  <div className="relative h-64 ">
                    <img
                      src="https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="User 3"
                      className="object-cover w-full h-64 rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-16 px-3 py-2 bg-gradient-to-t from-black">
                      Our favorite perfomances
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
