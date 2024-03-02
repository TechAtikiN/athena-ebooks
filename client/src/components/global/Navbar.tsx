'use client'
// named imports
import { useState } from 'react'
import { navLinks } from '@/constants/navLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

// default imports
import Image from 'next/image'
import Navlink from './Navlink'
import Link from 'next/link'

export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false)

  return (
    <nav className='p-2 bg-slate-50  border border-b'>
      <div className='flex justify-between items-center space-x-5'>

        {/* logo */}
        <Link href='/'>
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
          {navLinks.map((link, index) => (
            <Navlink key={index} link={link} />
          ))}
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
      {showNavLinks && (
        <div className='sm:hidden flex justify-between' id='navbar-multi-level'>
          <ul className='flex flex-col space-y-2 p-2 bg-slate-50'>
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className='px-5 text-sm font-semibold text-accent'>{link.name}</Link>
            ))}
          </ul>
          <button onClick={() => setShowNavLinks(false)} type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden'>
            <XMarkIcon className='w-5 h-5' />
          </button>
        </div>
      )}
    </nav>
  )
}
