// named imports
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

// defualt imports
import BookUploadForm from '@/components/books/BookUploadForm'

export default async function CreateBook() {
  const session = await getServerSession()
  if (!session) redirect('/signin')

  return (
    <div className='mx-3 p-7'>
      <h3 className='mb-3 text-2xl text-slate-700 font-semibold'>Start Your Writing Journey 📖</h3>
      <hr className='my-5' />

      <BookUploadForm />
    </div>
  )
}
