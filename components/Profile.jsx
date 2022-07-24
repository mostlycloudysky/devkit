/* eslint-disable @next/next/no-img-element */
import {
  CheckCircleIcon,
  OfficeBuildingIcon,
  EmojiSadIcon,
  CodeIcon,
} from '@heroicons/react/solid';
import React, { useRef, useState } from 'react';
import { useSession } from 'next-auth/react';

function Profile() {
  const { data: session } = useSession();

  // Greeting Message
  let greeting = 'Good Morning';
  let date = new Date();
  let hours = date.getHours();
  if (hours < 12) {
    greeting = 'Good Morning';
  } else if (hours < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <div className='flex items-center'>
      <img
        className='hidden h-16 w-16 rounded-full sm:block'
        src={
          session
            ? session?.user?.image
            : 'https://avatars.dicebear.com/api/open-peeps/placeholder.svg'
        }
        alt='avatar'
      />
      <div>
        <div className='flex items-center'>
          <img
            className='h-16 w-16 rounded-full sm:hidden'
            src={
              session
                ? session?.user?.image
                : 'https://avatars.dicebear.com/api/open-peeps/placeholder.svg'
            }
            alt=''
          />
          <h1 className='ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate'>
            {greeting}, {session ? session?.user?.name : `{ anonymous user }`}
          </h1>
        </div>
        <dl className='mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap'>
          <dt className='sr-only'>Company</dt>
          <dd className='flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6'>
            <CodeIcon
              className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
            DevChain
          </dd>
          <dt className='sr-only'>Account status</dt>
          <dd className='mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize'>
            {session ? (
              <>
                <CheckCircleIcon
                  className='flex-shrink-0 mr-1.5 h-5 w-5 text-green-400'
                  aria-hidden='true'
                />
                Verified Account
              </>
            ) : (
              <>
                <EmojiSadIcon
                  className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                NotVerified Account
              </>
            )}
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default Profile;
