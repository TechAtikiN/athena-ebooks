// default imports
import BackButton from '@/components/auth/BackButton'
import GoogleSignInBtn from '@/components/auth/GoogleSignInBtn'
import Image from 'next/image'

export default async function Login() {
  return (
    <div className='m-10 sm:m-24 p-4'>
      <div className='relative cursor-pointer'>
        <div
          className='absolute animate-pulse -inset-1 bg-gradient-to-r from-blue-600 via-sky-300 to-indigo-600 rounded-lg blur opacity-90 transition-all duration-400 ease-in-out'>
        </div>
        <div
          className='relative py-7 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6'
        >
          <div className='space-y-2'>
            <Image
              className='flex flex-col justify-start mx-auto'
              src='/images/logo.png'
              alt='logo'
              height={250}
              width={250}
            />
            <hr className='mx-16 pb-4' />

            <div className='space-y-6 w-2/3 mx-auto flex flex-col items-center'>
              <h2 className='text-2xl text-center font-bold text-slate-700'>
                Ready to get lost in a good book with
                <span className='text-sky-700 animate-pulse mx-2'>Athena</span>
                ?
              </h2>
              <h3 className='text-slate-500 text-sm text-center'>
                Welcome! Access your personalized e-library with ease. Sign in to get started.
              </h3>
              <GoogleSignInBtn />

              <BackButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
