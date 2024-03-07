// named imports
import { Session } from 'next-auth'

// default imports
import Image from 'next/image'
import Link from 'next/link'

export default function UserAvatar({ session }: { session: Session }) {
  return (
    <Link href='/profile' className='flex items-center space-x-2'>
      <Image src={session?.user?.image!} alt='user' width={40} height={40} className='border border-slate-600 rounded-full' />
    </Link>
  )
}
