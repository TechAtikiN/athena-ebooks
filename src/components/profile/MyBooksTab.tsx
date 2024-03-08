// named imports
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

// default imports
import AuthorBookItem from '../authors/AuthorBookItem'

interface Props {
  books: Book[]
}

export default function MyBooksTab({ books }: Props) {
  return (
    <div className='space-y-2 m-5'>
      {books.length > 0 && (
        <h3 className='text-2xl font-semibold text-slate-700 mb-5'>
          You&apos;ve published {books?.length} books
        </h3>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 h-[500px] overflow-y-auto thin-scrollbar'>
        {books.length > 0 ? books?.map((book, index) => (
          <AuthorBookItem book={book} key={index} />
        )) :
          <div className='col-span-2 text-slate-500 py-10'>
            <div className='flex justify-center items-center space-x-2'>
              <ExclamationCircleIcon className='h-8 w-8 text-rose-500' />
              <p className='text-lg font-semibold'>No books published yet</p>
            </div>
          </div>}
      </div>
    </div>
  )
}
