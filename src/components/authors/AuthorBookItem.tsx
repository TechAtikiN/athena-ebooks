// default imports
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  book: Book
}

export default function AuthorBookItem({ book }: Props) {
  return (
    <Link
      href={`/books/${book.id}`}
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
        {/* <span className="bg-accent/20 text-accent font-bold text-xs me-2 px-2.5 py-0.5 rounded-full">{book?.category}</span> */}
        <p className='text-gray-600 text-xs mb-2'>Published on&nbsp;
          <strong>
            {new Date(Number(book?.createdAt!)).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </strong></p>
      </div>
    </Link>
  )
}
