'use client'

// named imports
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

// default imports
import Image from 'next/image'

export default function HomeTab() {
  const { data: session } = useSession()
  if (!session) redirect('/')

  if (session) return (
    <div className='flex flex-col mx-auto justify-center items-center space-y-3 my-3'>
      <div className='relative h-[170px] w-[120px] sm:h-[200px] sm:w-[200px]'>
        <Image
          src={session?.user?.image || 'https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt='book'
          className='border border-slate-400 rounded-full'
          layout='fill'
        />
      </div>
      <h3 className='text-slate-700 font-semibold text-3xl'>Welcome, {session?.user?.name}</h3>
      <h3 className='text-slate-700 text-xl'>{session?.user?.email}</h3>
      <h3 className='text-slate-700 text-sm'>Joined on:&nbsp;{new Date().toISOString().split('T')[0]}</h3>
      <button onClick={() => signOut()} className='cta-btn w-1/2'>Log out</button>
    </div>
  )
}
