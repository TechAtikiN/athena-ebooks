'use client'

// named imports
import { signIn } from 'next-auth/react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

// defualt imports
import Image from 'next/image'

export default function GoogleSignInBtn() {
  const handleSignIn = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/' })
  }

  return (
    <button
      onClick={handleSignIn}
      className='flex justify-center space-x-1 text-slate-800 w-full px-4 border border-slate-300 py-2 font-semibold text-sm items-center bg-gray-100 rounded-full'
    >
      <Image height={32} width={32} src='/images/google-logo.png' alt='google-img' />
      <span className=''>Sign in with Google</span>
      <ChevronRightIcon className='h-5 w-5 text-slate-600' />
    </button>
  )
}
