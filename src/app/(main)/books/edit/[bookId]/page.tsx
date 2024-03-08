// named imports
import { getBook } from '@/actions/books'

// default imports
import EditBookForm from '@/components/books/EditBookForm'

export default async function BookEditPage({ params }: { params: { bookId: string } }) {
  const bookId = params?.bookId
  const bookDetails: BookDetails = await getBook(bookId)

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
