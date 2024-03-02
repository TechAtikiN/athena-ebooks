// named imports
import { authOptions } from '@/lib/auth';
import { Session, getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

// default imports
import Categories from '@/components/home/Categories';
import BooksListing from '@/components/home/BooksListing';

export default async function Home() {
  const session: Session | null = await getServerSession(authOptions)
  if (!session) redirect('/signin')

  return (
    <div className='mx-4'>
      <h2 className='text-stone-700 text-3xl my-10 font-semibold text-center font-serif'>E-Books Ready for Instant Access</h2>

      <Categories />
      <hr className='my-5' />
      <BooksListing />
    </div>
  )
}
