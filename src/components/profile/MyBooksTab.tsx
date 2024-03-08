// named imports
import { ExclamationCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { formatDate } from '@/lib/utils'

// default imports
import Image from 'next/image'
import Link from 'next/link'
import DeleteBook from '../books/DeleteBook'

interface Props {
  books: Book[]
}

export default function MyBooksTab({ books }: Props) {

  return (
    <div className='space-y-2 m-5'>
      {books?.length > 0 && (
        <h3 className='text-2xl font-semibold text-slate-700 mb-5'>
          You&apos;ve published {books?.length} books
        </h3>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto thin-scrollbar'>
        {books?.length > 0 ? books?.map((book, index) => (
          <div
            key={index}
            className='bg-slate-100 hover:bg-accent/20 h-40 flex space-x-4 justify-between items-start rounded-lg p-5'
          >
            <div className='relative object-cover h-[120px] w-[160px]'>
              <Image
                src={book?.coverImage}
                alt='book'
                className='rounded-sm'
                fill={true}
              />
            </div>
            <div>
              <Link
                href={`/books/${book?.id}`}
                className='flex flex-col'
              >
                <p className='text-lg hover:underline font-semibold'>{book?.title.slice(0, 30)}..</p>
                <p className='text-gray-600 text-sm mb-2'>{book?.description?.slice(0, 100)}...</p>
                <p className='text-gray-600 text-xs mb-2'>Published on&nbsp;
                  <strong>
                    {formatDate(book?.createdAt!)}
                  </strong>
                </p>
              </Link>
              {/* Edit book and delete book buttons  */}
              <div className='flex justify-between items-center space-x-4'>
                <Link
                  href={`/books/edit/${book?.id}`}
                >
                  <PencilSquareIcon className='h-5 w-5 text-slate-600' />
                </Link>
                <DeleteBook bookId={book?.id} />
              </div>
            </div>
          </div>
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
