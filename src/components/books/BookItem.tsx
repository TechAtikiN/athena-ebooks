// named imports
import { formatCase, truncateText } from '@/lib/utils'

// default imports
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  book: Book
}

export default function BookItem({ book }: Props) {
  return (
    <Link
      href={`/books/${book.id}`}
      className='flex flex-col space-y-2 justify-center items-center rounded-md p-3 group/item hover:shadow-md transition-all ease-in-out duration-150'
    >
      <div className='relative h-[170px] w-[120px] sm:h-[270px] sm:w-[220px] bg-gray-50 group-hover/item:bg-gray-100 transition-all ease-in-out duration-150 rounded-md'>
        <Image
          src={book?.coverImage}
          alt='book'
          objectFit='contain'
          className='p-0 sm:p-9'
          height={270}
          width={220}
        />
      </div>
      <div className='space-y-2'>
        <p className='font-semibold text-center text-slate-700'>
          {truncateText(book?.title, 15)}
        </p>
        <p className='italic text-xs text-center text-slate-500'>By:&nbsp;<span className='font-semibold'>{truncateText(book?.author?.name as string, 15)}</span></p>
      </div>
      <p className='badge hidden sm:block'>{truncateText(formatCase(book?.category), 14)}</p>
    </Link>
  )
}
