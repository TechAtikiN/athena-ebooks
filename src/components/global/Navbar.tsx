'use client'
// named imports
import { useState } from 'react'
import { navLinks } from '@/constants/navLink'
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'

// default imports
import Image from 'next/image'
import Navlink from './Navlink'
import Link from 'next/link'
import UserAvatar from './UserAvatar'

export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className='p-2 bg-slate-50  border border-b'>
      <div className='flex justify-between items-center space-x-5'>

        {/* logo */}
        <Link href='/books'>
          <Image src='/images/logo.png' alt='logo' width={140} height={140} />
        </Link>

        {/* Search bar */}
        <input
          type='text'
          className='text-sm focus:border-slate-300 focus:outline-none px-4 py-2 rounded-full border border-slate-200 sm:w-1/2 w-full'
          placeholder='Search by books title or authors'
        />

        {/* desktop navlinks */}
        <ul className='hidden sm:flex'>
          {session && session ? (
            <div className='flex items-center'>
              {navLinks.map((link, index) => (
                <Navlink key={index} link={link} />
              ))}
              {/* user avatar */}
              <UserAvatar session={session} />
            </div>
          ) : (
            <div className='flex items-center'>
              <Link href={'/books'} className={`px-5 text-sm font-semibold `}>Books</Link>
              <Link href={'/signin'} className='px-3 py-1 flex items-center hover:text-accent font-semibold rounded-md space-x-1'>
                <span>Sign In</span>
                <ArrowRightIcon className='w-4 h-4' />
              </Link>
            </div>
          )}
        </ul>

        {/* mobile menu */}
        {!showNavLinks && (
          <button
            onClick={() => setShowNavLinks(true)}
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden'
          >
            <Bars3Icon className='w-5 h-5' />
          </button>
        )}
      </div>

      {/* mobile navlinks */}
      {session && showNavLinks && (
        <div className='sm:hidden flex justify-between'>
          <ul className='flex flex-col space-y-2 p-2 bg-slate-50'>
            {navLinks.map((link, index) => (
              <Navlink key={index} link={link} />
            ))}
            <Navlink link={{ name: 'Profile', href: '/profile' }} />
          </ul>
          <button onClick={() => setShowNavLinks(false)} type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden'>
            <XMarkIcon className='w-5 h-5' />
          </button>
        </div>
      )}
    </nav>
  )
}
