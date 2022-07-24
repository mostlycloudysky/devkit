import React from 'react';
import Cards from '../components/Cards';
import Profile from '../components/Profile';

function foryou() {
  return (
    <>
      <div className='bg-white shadow'>
        <div className='px-2 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8'>
          <div className='py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200'>
            <div className='flex-1 min-w-0'>
              <Profile />
            </div>
            <div className='mt-6 flex space-x-3 md:mt-0 md:ml-4'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600 focus:outline-none '
              >
                Create Favorites...
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default foryou;
