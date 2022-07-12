import Link from 'next/link'
import React from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Tabs({href, isSelected, title}) {

  return (
    <>
      <Link href={href}>
          <a
            className='text-gray-900 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
          >
          <span>{title}</span>
          <span area-hidden="true" 
          className={classNames(
              isSelected  ? 'bg-blue-600' : 'bg-transparent',
              'absolute inset-x-0 bottom-0 h-0.5'
          )} />
          </a>
      </Link>
    </>
  )
}

export default Tabs