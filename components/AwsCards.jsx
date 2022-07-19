/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { GiftIcon } from '@heroicons/react/solid';
import Link from 'next/link';

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
                  <Link href={blog.item_url}>
                    <a target='_blank' rel='noopener noreferrer'>
                      <h2
                        id='question-title-81614'
                        className='mt-4 mb-2 font-medium text-blue-800 text-xl hover:underline'
                      >
                        {blog.title}
                      </h2>
                    </a>
                  </Link>

                  <div className='flex space-x-3'>
                    <div className='min-w-0 flex-1'>
                      <p className='text-sm font-medium text-gray-900'>
                        {blog.authors.map((author) => (
                          <a key={blog.title} href='#' className='mr-1'>
                            {author}
                          </a>
                        ))}

                        <time dateTime='2020-12-09'>
                          , {new Date(blog.date_created).toLocaleDateString()}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-2 text-sm text-gray-700 space-y-4'>
                  <p>{blog.post_excerpt}</p>
                </div>
                <div className='mt-6 flex justify-between space-x-8'>
                  <div className='flex space-x-6'>
                    <div>
                      <ul role='list' className='mt-2 leading-8'>
                        {blog.categories.map((category) => (
                          <li className='inline' key={blog.title}>
                            <a
                              href='#'
                              className='relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5'
                            >
                              <div className='absolute flex-shrink-0 flex items-center justify-center'>
                                <span
                                  className='h-1.5 w-1.5 rounded-full bg-blue-500'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-3.5 text-sm font-medium text-gray-900'>
                                {category}
                              </div>
                            </a>{' '}
                          </li>
                        ))}
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
