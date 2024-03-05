// default imports
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  book: Book
}

export default function BookItem({ book }: Props) {
  return (
    <Link href={`/books/${book.id}`} className='flex flex-col space-y-2 justify-center items-center rounded-md p-3 group/item'>
      <div className='relative h-[170px] w-[120px] sm:h-[270px] sm:w-[220px] bg-stone-100 rounded-md'>
        <Image
          src={book.coverImage}
          alt='book'
          className='p-0 sm:p-9'
          layout='fill'
        />
      </div>
      <div className='space-y-2'>
        <p className='font-semibold text-center text-slate-700'>{book.title}</p>
        <p className='italic text-xs text-center text-slate-500'>By:&nbsp;<span className='font-semibold'>{book.author.name}</span></p>
      </div>
      <p className='badge'>{book.category}</p>
    </Link>
  )
}
