import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  book: Book
}

export default function BookItem({ book }: Props) {
  return (
    <Link href={`${book.id}`} className='rounded-md hover:shadow-md p-3 group/item'>
      <div className='relative h-[230px] w-[180px]'>
        <Image
          src='https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='book'
          className='shadow-md'
          layout='fill'
        />
        <HeartIcon className='h-6 w-6 text-white group/edit invisible group-hover/item:visible absolute m-2 top-0 right-0 z-10' />
      </div>
      <div className='my-1'>
        <p className='font-semibold'>{book.name}</p>
        <p className='italic text-sm text-slate-500'>By:&nbsp;<span className='font-semibold'>{book.author}</span></p>
      </div>
      <p className='p-1 text-xs w-1/2 rounded-full bg-gray-100 text-center font-bold'>{book.tag}</p>
    </Link>
  )
}
