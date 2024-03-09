// named imports
import { formatDate } from '@/lib/utils'

// default imports
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  book: Book
}

export default function AuthorBookItem({ book }: Props) {
  return (
    <Link
      href={`/books/${book?.id}`}
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
      <div className='space-y-1 w-full'>
        <h3 className='text-lg font-semibold'>{book?.title.slice(0, 30)}..</h3>
        <p className='text-gray-600 text-sm mb-2'>
          {/* if description is too long, it will be truncated */}
          {book?.description?.length! > 100 ? book?.description?.slice(0, 100) + '...' : book?.description!}
        </p>
        <p className='text-gray-600 text-xs mb-2'>Published on&nbsp;
          <strong>
            {formatDate(book?.createdAt!)}
          </strong>
        </p>
      </div>
    </Link>
  )
}
