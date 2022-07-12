/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

import {
  CheckCircleIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid'
import Cards from './cards'
import Link from 'next/link'
import Tabs from '../components/Tabs';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const tabs = [
    { name: 'Medium', href: '/cards', current: true },
    { name: 'Devto', href: '#', current: false },
    { name: 'HashNode', href: '#', current: false },
    { name: 'Github', href: '#', current: false },
  ]

  const { query } = useRouter();

  let isTabOneSelected = !!query.tabOne || true;
  const isTabTwoSelected = !!query.tabTwo ;
  const isTabThreeSelected = !!query.tabThree ;
  const isTabFourSelected = !!query.tabFour ;


  const [post, setPost] = useState();

  useEffect(() => {
    setPost('This is for medium blogs only')

  }, [])


  useEffect(() => {
    console.log('Use effect has been triggered..')

    if (isTabOneSelected) {
      setPost('This is only medium posts')
    }

    if (isTabTwoSelected) {
      setPost('This is only devto posts')
    }

    if (isTabThreeSelected) {
      setPost('This is only hashnode posts')
    }

    if (isTabFourSelected) {
      setPost('This is fourth post')
    }

  }, [isTabOneSelected, isTabTwoSelected, isTabThreeSelected, isTabFourSelected])

  return (
    <div>
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block"
                    src="https://avatars.dicebear.com/api/open-peeps/placeholder.svg"
                    alt="avatra"
                  />
                  <div>
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src="https://avatars.dicebear.com/api/open-peeps/placeholder.svg"
                        alt=""
                      />
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Good morning, Sandeep Yaramchitti
                      </h1>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt className="sr-only">Company</dt>
                      <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                        <OfficeBuildingIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        DevKit
                      </dd>
                      <dt className="sr-only">Account status</dt>
                      <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                        <CheckCircleIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                        Verified account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  More Details...
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Create Favorites...
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex pt-5">
          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                {/* Start main area*/}
                <div className="relative h-full" style={{ minHeight: '36rem' }}>
                  <div className="absolute inset-0 border-2 border-gray-200  rounded-lg">
                  <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    {/* {tabs.map((tab, tabIdx) => (
                      <Link href={tab.href} key={tab.name}>
                        <a
                        aria-current={tab.current ? 'page' : undefined}
                        className={classNames(
                          tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                          tabIdx === 0 ? 'rounded-l-lg' : '',
                          tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                          'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                        )}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.current ? 'bg-rose-500' : 'bg-transparent',
                            'absolute inset-x-0 bottom-0 h-0.5'
                          )}
                        />
                      </a>
                      </Link>

                    ))} */}
                    <Tabs href="/?tabOne=true" title='Medium' isSelected={isTabOneSelected}  />
                    <Tabs href="/?tabTwo=true" title='DevTo' isSelected={isTabTwoSelected} />
                    <Tabs href="/?tabThree=true" title='HashNode' isSelected={isTabThreeSelected} />
                    <Tabs href="/?tabFour=true" title='Github' isSelected={isTabFourSelected} />
                  </nav>
                     {/* <Cards />        */}
                     <Cards />
                  </div>
                </div>
                {/* End main area */}
              </div>
            </div>
          </div>
          <div className="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0  lg:border-gray-200 xl:pr-0">
            <div className="h-full pl-6 py-6 lg:w-80">
              {/* Start right column area */}
              <div className="h-full relative" style={{ minHeight: '16rem' }}>
                <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />
              </div>
              {/* End right column area */}
            </div>
          </div>
    </div>    
    </div>
  )
}
