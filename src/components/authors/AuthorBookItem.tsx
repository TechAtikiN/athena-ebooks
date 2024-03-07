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
      <div className='relative object-cover h-[120px] w-[160px]'>
        <Image
          src={book?.coverImage}
          alt='book'
          className='rounded-sm'
          layout='fill'
        />
      </div>
      <div className='space-y-1'>
        <h3 className='text-lg font-semibold'>{book?.title.slice(0, 30)}..</h3>
        <p className='text-gray-600 text-sm mb-2'>{book?.description?.slice(0, 100)}...</p>
        <p className='text-gray-600 text-xs mb-2'>Published on&nbsp;
          <strong>
            {formatDate(book?.createdAt!)}
          </strong>
        </p>
      </div>
    </Link>
  )
}
