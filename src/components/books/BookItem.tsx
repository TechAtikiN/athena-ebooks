// default imports
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  book: Book
}

export default function BookItem({ book }: Props) {
  return (
    <Link href={`/books/${book.id}`} className='flex flex-col space-y-2 justify-center items-center rounded-md p-3 group/item hover:shadow-md transition-all ease-in-out duration-150'>
      <div className='relative h-[170px] w-[120px] sm:h-[270px] sm:w-[220px] bg-gray-50 group-hover/item:bg-gray-100 transition-all ease-in-out duration-150 rounded-md'>
        <Image
          src={book?.coverImage}
          alt='book'
          className='p-0 sm:p-9'
          fill={true}
        />
      </div>
      <div className='space-y-2'>
        <p className='font-semibold text-center text-slate-700'>{`${book.title.slice(0, 20)}...`}</p>
        <p className='italic text-xs text-center text-slate-500'>By:&nbsp;<span className='font-semibold'>{book?.author?.name}</span></p>
      </div>
      <p className='badge'>{book.category}</p>
    </Link>
  )
}
