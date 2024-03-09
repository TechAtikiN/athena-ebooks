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
            <div className='relative object-cover w-24 h-32 sm:w-32 sm:h-32'>
              <Image
                src={book?.coverImage}
                alt='book'
                className='rounded-sm'
                fill={true}
              />
            </div>
            <div className='w-full'>
              <Link
                href={`/books/${book?.id}`}
                className='flex flex-col justify-start items-start'
              >
                <p className='sm:text-lg hover:underline font-semibold'>
                  {book?.title?.length > 30 ? `${book?.title?.slice(0, 30)}...` : book?.title}
                </p>
                <p className='text-gray-600 text-sm mb-2 block'>
                  {book.description && book?.description?.length > 70 ? `${book?.description?.slice(0, 70)}...` : book?.description}
                </p>
                <p className='text-gray-600 text-xs mb-2'>Published on&nbsp;
                  <strong>
                    {formatDate(book?.createdAt!)}
                  </strong>
                </p>
              </Link>
              {/* Edit book and delete book buttons  */}
              <div className='flex flex-row justify-between sm:items-center sm:space-x-4'>
                <Link
                  href={`/books/edit/${book?.id}`}
                >
                  <PencilSquareIcon className='h-5 w-5 text-slate-600' />
                </Link>
                <DeleteBook bookId={book?.id} bookPdf={book?.bookPdf} bookCover={book?.coverImage} />
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
