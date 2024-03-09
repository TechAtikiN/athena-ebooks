'use client'
// named imports
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Session } from 'next-auth'

// default imports
import Image from 'next/image'
import Navlink from './Navlink'
import Link from 'next/link'
import UserAvatar from './UserAvatar'
import Search from './Search'

const NAV_LINKS = [
  { name: 'Start Writing', href: '/write', authRequired: true },
]

export default function Navbar({ session }: { session: Session | null }) {
  const [showNavLinks, setShowNavLinks] = useState(false)

  const handleToggleMobileMenu = () => {
    setShowNavLinks(showNavLinks => !showNavLinks)
  }

  return (
    <nav className='p-2 bg-slate-50  border border-b'>
      <div className='flex justify-between items-center space-x-5'>

        {/* logo */}
        <Link href='/'>
          <Image src='/images/logo.png' alt='logo' priority quality={100} width={140} height={140} />
        </Link>

        {/* Search bar */}
        <Search />

        {/* desktop navlinks */}
        <ul className='hidden sm:flex items-center space-x-3'>
          {/* Nav Links */}
          {NAV_LINKS.filter(link => link.authRequired ? session : true).map(link => <Navlink key={link.href} link={link} />)}

          {/* User Profile */}
          {session ? (
            <UserAvatar session={session} />
          ) : (
            <Link
              href={'/signin'}
              className='px-3 py-1 flex items-center hover:bg-sky-600 transition-all duration-150 ease-in-out font-medium space-x-1 bg-accent rounded-md text-white'
            >
              <span>Sign In</span>
            </Link>
          )}
        </ul>

        {/* mobile menu */}
        <button
          onClick={() => handleToggleMobileMenu()}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden'
        >
          {showNavLinks ? <XMarkIcon className='w-5 h-5' /> : <Bars3Icon className='w-5 h-5' />}
        </button>
      </div>

      {/* mobile navlinks */}
      {showNavLinks && (
        <div className='sm:hidden flex justify-between pt-4 pb-3'>
          <ul className='flex flex-col space-y-3 p-2 border border-accent shadow-sm rounded-md w-full text-right'>
            {NAV_LINKS.filter(link => link.authRequired ? session : true).map(link => <Navlink key={link.href} link={link} />)}

            {session ? <Navlink link={{ name: 'Profile', href: '/profile' }} /> : (
              <div className='flex justify-end items-center'>
                <Link
                  href={'/signin'}
                  className='px-3 py-1 w-fit font-medium space-x-1 bg-accent rounded-md text-white'
                >
                  <span>Sign In</span>
                </Link>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}
