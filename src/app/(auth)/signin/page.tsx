// default imports
import GoogleSignInBtn from '@/components/auth/GoogleSignInBtn'
import Image from 'next/image'

export default async function Login() {
  return (
    <div className='my-24'>
      <Image className='mx-auto flex flex-col' src='/images/logo.png' alt='logo' height={300} width={300} />
      <hr className='mx-16 pb-7' />
      <div className='space-y-6 w-1/2 mx-auto flex flex-col items-center'>
        <h2 className='text-2xl text-center font-bold text-slate-700'>
          Ready to get lost in a good book with
          <span className='text-accent animate-pulse'>Athena</span>
          ?
        </h2>
        <h3 className='text-slate-500 text-sm text-center'>
          Welcome! Access your personalized e-library with ease. Sign in to get started.
        </h3>
        <GoogleSignInBtn />
      </div>
    </div>
  )
}
