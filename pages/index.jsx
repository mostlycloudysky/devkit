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
import Activity from '../components/Activity';
import Profile from '../components/Profile';
import Aws from '../components/alltabs/Aws';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {

  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
        <div className="bg-white shadow">
          <div className="px-2 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="flex-1 min-w-0">
                <Profile />
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r  hover:bg-gradient-to-r from-cyan-500 to-blue-600 focus:outline-none "
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
                  <div className="absolute inset-0 rounded-lg">
                  <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    <TabNavItem title="Medium" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    <TabNavItem title="Dev.to" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    <TabNavItem title="Hashnode" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    <TabNavItem title="Github" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>
                    <TabNavItem title="AWS Blogs" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavItem>

                  </nav>
                     <div>
                       <TabContent id="tab1" activeTab={activeTab}>{<MediumTabs />}</TabContent>
                       <TabContent id="tab2" activeTab={activeTab}>{<DevTo />}</TabContent>
                       <TabContent id="tab3" activeTab={activeTab}>{<Hashnode />}</TabContent>
                       <TabContent id="tab4" activeTab={activeTab}>{<Hashnode />}</TabContent>
                       <TabContent id="tab5" activeTab={activeTab}>{<Aws />}</TabContent>

                     </div>

                  </div>
                </div>
                {/* End main area */}
              </div>
            </div>
          </div>
          <div className="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0  lg:border-gray-200 xl:pr-0">
            <div className="h-full py-6 lg:w-80">
              {/* Start right column area */}
              <div className="h-full relative ml-2 mr-2" style={{ minHeight: '16rem' }}>
                <div className="absolute inset-0  rounded-lg">
                  <Activity />
                </div>
              </div>
              {/* End right column area */}
            </div>
          </div>
    </div>    
    </>
  )
}
