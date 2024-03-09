// named imports
import { getBook } from '@/actions/books'
import { getUser } from '@/actions/user'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

// default imports
import EditBookForm from '@/components/books/EditBookForm'

export const revalidate = 0

export default async function BookEditPage({ params }: { params: { bookId: string } }) {
  const session = await getServerSession()
  const currentUser = await getUser(session?.user?.email || '')

  const bookId = params?.bookId
  const bookDetails: BookDetails = await getBook(bookId)

  // check if user is the author of the book
  if (currentUser?.id !== bookDetails?.author?.id) redirect('/')

  return (
    <div className='mx-3 p-7'>
      <h3 className='mb-3 text-2xl text-slate-700 font-semibold'>
        Edit Book Details 📖
      </h3>
      <hr className='my-5' />
      <EditBookForm bookDetails={bookDetails} />
    </div>
  )
}
