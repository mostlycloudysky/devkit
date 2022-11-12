/* eslint-disable @next/next/no-img-element */
import { Children, Fragment, useState, useEffect } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import Confetti from 'react-confetti';
import {
  BellIcon,
  ClockIcon,
  CodeIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  HeartIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HeaderProfile from './HeaderProfile';
import { useSession } from 'next-auth/react';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true, id: 1 },
  { name: 'Codeshare', href: '/foryou', icon: CodeIcon, current: false, id: 2 },
  {
    name: 'Trending',
    href: '/trending',
    icon: TrendingUpIcon,
    current: false,
    id: 3,
  },
  {
    name: 'Playground',
    href: '/playground',
    icon: PlayIcon,
    current: false,
    id: 4,
  },
];
const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: CogIcon, id: 1 },
];
const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;
  const { data: session } = useSession();

  const [confettiFlag, setConfettiFlag] = useState('true');

  useEffect(() => {
    const timer = setTimeout(() => setConfettiFlag('false'), 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className='min-h-full'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 flex z-40'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-black'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex-shrink-0 flex items-center px-4'>
                    <div className='flex items-center flex-shrink-0 px-4'>
                      <img
                        className='w-12 h-12 object-contain cursor-pointer pr-2'
                        src='/logo.png'
                        alt='logo'
                      />
                      <span className='pl-2 font-bold text-white text-xl'>
                        DevChain
                      </span>
                    </div>
                  </div>
                  <nav
                    className='mt-5 flex-shrink-0 h-full divide-y bg-black overflow-y-auto'
                    aria-label='Sidebar'
                  >
                    <div className='px-2 space-y-1'>
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-blue-600 text-white'
                              : 'text-cyan-100 hover:text-white hover:bg-blue-600',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className='mr-4 flex-shrink-0 h-6 w-6 text-blue-200'
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className='mt-6 pt-6'>
                      <div className='px-2 space-y-1'>
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.id}
                            href={item.href}
                            className='group flex items-center px-2 py-2 text-base font-medium rounded-md text-blue-100 hover:text-white hover:bg-blue-600'
                          >
                            <item.icon
                              className='mr-4 h-6 w-6 text-blue-200'
                              aria-hidden='true'
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className='flex-shrink-0 w-14' aria-hidden='true'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow bg-black  pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <img
                className='w-12 h-12 object-contain cursor-pointer pr-2'
                src='/logo.png'
                alt='logo'
              />
              <span className='pl-2 font-bold text-white text-xl'>
                DevChain
              </span>
            </div>
            <nav
              className='mt-5 flex-1 flex flex-col divide-y bg-black overflow-y-auto'
              aria-label='Sidebar'
            >
              <div className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <a
                      className={classNames(
                        currentRoute === item.href
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                          : 'text-blue-100 hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-600',
                        'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                      )}
                    >
                      <item.icon className='mr-4 flex-shrink-0 h-6 w-6 text-blue-200' />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className='mt-6 pt-6'>
                <div className='px-2 space-y-1'>
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-blue-100 hover:text-white hover:bg-blue-600'
                    >
                      <item.icon
                        className='mr-4 h-6 w-6 text-blue-200'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='lg:pl-64 flex flex-col flex-1'>
          <div className='relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            {/* Search bar */}
            <div className='flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
              <div className='flex-1 flex font-extrabold text-transparent pt-4 text-2xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
                Open Source Developer Chain for Software Development and
                Deployment
                {/* <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search transactions"
                      type="search"
                    />
                  </div>
                </form> */}
              </div>
              <div className='ml-4 flex items-center md:ml-6 cursor-pointer outline-none'>
                <button
                  type='button'
                  className='bg-white p-1 rounded-full text-gray-400 hover:text-cyan-500 '
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon
                    className='h-6 w-6 outline-none'
                    aria-hidden='true'
                  />
                </button>

                <HeaderProfile session={session} />
              </div>
            </div>
          </div>
          <main className='flex-1 pb-8'>
            {confettiFlag === 'true' ? (
              <Confetti width={2000} height={2000} />
            ) : (
              ''
            )}
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
