/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { GiftIcon } from '@heroicons/react/solid';

function AwsCards({ blogs }) {
  console.log('Blogs within AWS card component', blogs);
  return (
    <>
      <div className='mt-4'>
        <ul role='list' className='space-y-4'>
          {blogs.map((blog) => (
            <li
              key={blog.title}
              className='bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg'
            >
              <article aria-labelledby='question-title-81614'>
                <div>
                  <h2
                    id='question-title-81614'
                    className='mt-4 mb-2 font-medium text-blue-800 text-xl'
                  >
                    {blog.title}
                  </h2>
                  <div className='flex space-x-3'>
                    <div className='min-w-0 flex-1'>
                      <p className='text-sm font-medium text-gray-900'>
                        {blog.authors.map((author) => (
                          <a
                            key={blog.title}
                            href='#'
                            className='hover:underline'
                          >
                            Dries Vincent
                          </a>
                        ))}

                        <time dateTime='2020-12-09T11:43:00'>, 07/18/2022</time>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-2 text-sm text-gray-700 space-y-4'>
                  <p>
                    Jurassic Park was an incredible idea and a magnificent feat
                    of engineering, but poor protocols and a disregard for human
                    safety killed what could have otherwise been one of the best
                    businesses of our generation.
                  </p>
                  <p>
                    Ultimately, I think that if you wanted to run the park
                    successfully and keep visitors safe, the most important
                    thing to prioritize would be&hellip;
                  </p>
                </div>
                <div className='mt-6 flex justify-between space-x-8'>
                  <div className='flex space-x-6'>
                    <div>
                      <ul role='list' className='mt-2 leading-8'>
                        <li className='inline'>
                          <a
                            href='#'
                            className='relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5'
                          >
                            <div className='absolute flex-shrink-0 flex items-center justify-center'>
                              <span
                                className='h-1.5 w-1.5 rounded-full bg-rose-500'
                                aria-hidden='true'
                              />
                            </div>
                            <div className='ml-3.5 text-sm font-medium text-gray-900'>
                              Bug
                            </div>
                          </a>{' '}
                        </li>
                        <li className='inline'>
                          <a
                            href='#'
                            className='relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5'
                          >
                            <div className='absolute flex-shrink-0 flex items-center justify-center'>
                              <span
                                className='h-1.5 w-1.5 rounded-full bg-rose-500'
                                aria-hidden='true'
                              />
                            </div>
                            <div className='ml-3.5 text-sm font-medium text-gray-900'>
                              Bug
                            </div>
                          </a>{' '}
                        </li>
                        <li className='inline'>
                          <a
                            href='#'
                            className='relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5'
                          >
                            <div className='absolute flex-shrink-0 flex items-center justify-center'>
                              <span
                                className='h-1.5 w-1.5 rounded-full bg-indigo-500'
                                aria-hidden='true'
                              />
                            </div>
                            <div className='ml-3.5 text-sm font-medium text-gray-900'>
                              Accessibility
                            </div>
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex text-sm'>
                    <span className='inline-flex items-center text-sm'>
                      <button
                        type='button'
                        className='inline-flex space-x-2 text-gray-400 hover:text-gray-500 items-center'
                      >
                        <GiftIcon className='h-6 w-6' />
                        <span className='font-medium text-gray-900'>Send</span>
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AwsCards;
