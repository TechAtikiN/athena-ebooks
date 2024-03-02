// named imports
import { HeartIcon } from '@heroicons/react/24/outline'

// default imports
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  book: Book
}

export default function BookItem({ book }: Props) {
  return (
    <Link href={`/books/${book.id}`} className='flex flex-col space-y-2 justify-center items-center rounded-md p-3 group/item'>
      <div className='relative h-[170px] w-[120px] sm:h-[270px] sm:w-[220px] bg-stone-100 rounded-md'>
        <Image
          src='https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='book'
          className='p-0 sm:p-9'
          layout='fill'
        />
        {/* <HeartIcon className='h-6 w-6 text-slate-500 group/edit invisible group-hover/item:visible absolute m-2 top-0 right-0 z-10' /> */}
      </div>
      <div className='space-y-2'>
        <p className='font-semibold text-center text-slate-700'>{book.name}</p>
        <p className='italic text-xs text-center text-slate-500'>By:&nbsp;<span className='font-semibold'>{book.author}</span></p>
      </div>
      <p className='badge'>{book.tag}</p>
    </Link>
  )
}
