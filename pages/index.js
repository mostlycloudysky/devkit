/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';

import {
  CheckCircleIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid'
import MediumTabs from '../components/alltabs/MediumTabs';
import DevTo from '../components/alltabs/DevTo';
import TabNavItem from '../components/TabNavItem';
import TabContent from '../components/TabContent';
import Hashnode from '../components/alltabs/Hashnode';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {

  const [activeTab, setActiveTab] = useState("tab1");

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
                    <TabNavItem title="Medium" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    <TabNavItem title="Dev.to" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    <TabNavItem title="Hashnode" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    <TabNavItem title="Github" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                  </nav>
                     <div>
                       <TabContent id="tab1" activeTab={activeTab}>{<MediumTabs />}</TabContent>
                       <TabContent id="tab2" activeTab={activeTab}>{<DevTo />}</TabContent>
                       <TabContent id="tab3" activeTab={activeTab}>{<Hashnode />}</TabContent>
                       <TabContent id="tab4" activeTab={activeTab}>{<Hashnode />}</TabContent>
                     </div>

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
