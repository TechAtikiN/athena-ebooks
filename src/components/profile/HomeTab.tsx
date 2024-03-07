// named imports
import { signOut } from 'next-auth/react'
import { formatDate } from '@/lib/utils'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

// default imports
import Image from 'next/image'
import EditUserDetails from './EditUserDetails'

interface Props {
  user: User
}

export default function HomeTab({ user }: Props) {
  return (
    <div className='w-full'>
      {/* BG Gradient */}
      <div className='hidden sm:block sm:h-44 bg-gradient-to-br from-indigo-500 via-sky-300 to-sky-200 w-full' />

      {/* Profile */}
      <div className='flex flex-col bg-white sm:shadow-md sm:border mx-auto py-6 justify-center items-center space-y-3 relative -top-16 max-w-2xl'>
        <div className='relative h-[170px] w-[120px] sm:h-[120px] sm:w-[120px]'>
          <Image
            src={user?.image || 'https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            alt='book'
            className='border border-slate-400 rounded-full'
            fill={true}
          />

          {/* Edit author description and location */}
          <EditUserDetails />
        </div>

        <div className='px-5 flex flex-col space-y-4 justify-center items-center'>
          <h3 className='text-slate-700 font-semibold text-2xl'>Welcome, {user?.name}</h3>
          <h3 className='text-slate-700'>{user?.email}</h3>
          <p className='text-slate-700 text-xs'>{user?.description}</p>
          <div className='flex text-slate-700 text-sm items-center'>
            {user?.location && (
              <div className='flex items-center'>
                <MapPinIcon className='text-accent h-5 w-5' />
                <h3>{user?.location}</h3>
              </div>
            )}
            <div className=' flex items-center'>
              <ClockIcon className='text-accent h-5 w-5 ml-2' />
              <h3>Joined on:&nbsp;
                {formatDate(user?.createdAt)}
              </h3>
            </div>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className='border border-slate-500 hover:bg-slate-100 py-1 px-2 w-1/2'
        >
          Log out
        </button>
      </div>
    </div>
  )
}
