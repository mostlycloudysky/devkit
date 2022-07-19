/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {ThumbUpIcon, EyeIcon, ChevronDoubleRightIcon} from '@heroicons/react/solid'


function AwsCards() {
  return (
    <div className="mt-4">
    <ul role="list" className="space-y-4">
      <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
        <article aria-labelledby="question-title-81614">
          <div>
          <h2 id="question-title-81614" className="mt-4 mb-2 font-medium text-blue-800 text-xl">What would you have done differently if you ran Jurassic Park?</h2>
            <div className="flex space-x-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline">Dries Vincent</a>
                  <time dateTime="2020-12-09T11:43:00">, 07/18/2022</time>
                </p>
              </div>
              
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-700 space-y-4">
            <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
            <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
          </div>
          <div className="mt-6 flex justify-between space-x-8">
            <div className="flex space-x-6">
              <span className="inline-flex items-center text-sm">
                <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500 items-center">
                  <ThumbUpIcon className='h-6 w-6' />
                  <span className="font-medium text-gray-900">29</span>
                  <span className="sr-only">likes</span>
                </button>
              </span>
              <span className="inline-flex items-center text-sm">
                <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500 items-center">
                  <EyeIcon className='h-6 w-6' />
                  <span className="font-medium text-gray-900">2.7k</span>
                  <span className="sr-only">views</span>
                </button>
              </span>
            </div>
            <div className="flex text-sm">
              <span className="inline-flex items-center text-sm">
                <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500 items-center">
                  <ChevronDoubleRightIcon className='h-6 w-6' />
                  <span className="font-medium text-gray-900">Send</span>
                </button>
              </span>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
  )
}

export default AwsCards