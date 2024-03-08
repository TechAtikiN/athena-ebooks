'use client'

// named imports
import { signIn } from 'next-auth/react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

// defualt imports
import Image from 'next/image'

export default function GoogleSignInBtn() {
  const handleSignIn = () => {
    signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
  }

  return (
    <button
      onClick={handleSignIn}
      className='flex border border-accent rounded-full p-2 px-4 space-x-2 items-center justify-center text-slate-800 font-semibold hover:bg-accent/35 transition duration-100 ease-in-out w-full'
    >
      <Image src='/images/google-logo.svg' alt='google' height={30} width={30} />
      <span className=''>Sign in with Google</span>
      <ChevronRightIcon className='h-5 w-5 text-slate-600' />
    </button>
  )
}
