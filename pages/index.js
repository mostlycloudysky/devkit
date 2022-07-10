import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  CheckCircleIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid'
export default function Home() {
  return (
    <div className="bg-white shadow">
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
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
  )
}
