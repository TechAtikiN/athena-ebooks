// default imports
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  book: BookDetails
}

export default function AuthorBookItem({ book }: Props) {
  return (
    <Link
      href={`/books/${book.id}`}
      className='bg-slate-100 hover:bg-accent/20 flex space-x-4 justify-between items-start rounded-lg p-3'
    >
      <div className='relative object-cover h-[180px] w-[350px]'>
        <Image
          src='https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='book'
          className='rounded-sm'
          layout='fill'
        />
      </div>
      <div className='space-y-2'>
        <h3 className='text-xl font-semibold'>{book.title.slice(0, 30)}..</h3>
        <p className='text-gray-600 text-sm mb-2'>{book.description.slice(0, 150)}...</p>
        <span className="bg-accent/20 text-accent font-bold text-xs me-2 px-2.5 py-0.5 rounded-full">{book.category}</span>
        <p className='text-gray-600 text-xs mb-2'>Published on <strong>{new Date().toISOString().split('T')[0]}</strong></p>
      </div>
    </Link>
  )
}
