/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { Children, Fragment, useState } from 'react'
import {signIn, signOut } from "next-auth/react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function HeaderProfile({session}) {
  return (
    <>
        <Menu as="div" className="ml-3 relative">
            <div>

            {session ? (
                <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                    <img
                    className="h-8 w-8 rounded-full"
                    src={session?.user?.image}
                    alt="avatar"
                    />
                    <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                    <span className="sr-only">Open user menu for </span>{session?.user?.name}
                    </span>
                    <ChevronDownIcon
                    className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                    aria-hidden="true"
                    />
                </Menu.Button>
            ) : (
                <div onClick={() => signIn()} className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex hover:bg-gradient-to-r from-cyan-600 to-blue-600 hover:text-white">
                    <div className="relative h-5 w-5 flex-shrink-0">
                        <Image src="/github.png" layout="fill" alt="" />
                    </div>
                    <p className="text-black-400 font-thin ">Sign In with GitHub</p>
                    </div>
            )}    
           
            </div>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                    Your Profile
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                    Settings
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    onClick={() => signOut()}
                    >
                    Logout
                    </a>
                )}
                </Menu.Item>
            </Menu.Items>
            </Transition>
        </Menu>

    </>
  )
}

export default HeaderProfile