// named imports
import { Session } from 'next-auth'

// default imports
import Image from 'next/image'
import Link from 'next/link'

export default function UserAvatar({ session }: { session: Session }) {
  return (
    <Link href='/profile' className='flex items-center space-x-2'>
      {session?.user?.image ? (
        <Image
          src={session?.user?.image!}
          alt='user' width={40} height={40} className='border rounded-full'
        />
      ) : (
        // show user's initials
        <div className='flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-600 to-sky-400 text-white font-semibold rounded-full'>
          {session?.user?.name?.split(' ').map((name) => name[0]).join('')}
        </div>
      )}
    </Link>
  )
}
