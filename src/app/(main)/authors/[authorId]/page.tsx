// named imports
import { getBooks } from '@/actions/books'

// default imports
import AuthorBookItem from '@/components/authors/AuthorBookItem'
import Image from 'next/image'

export const revalidate = 0

export default async function AuthorDetailsPage({ params }: { params: { authorId: string } }) {
  const books: Book[] = await getBooks(undefined, params?.authorId)
  const author = books[0]?.author

  return (
    <div className=''>
      {/* Background Image */}
      <div className='relative w-full h-[265px]'>
        <Image
          className='object-cover'
          src='/images/author-bg.avif'
          alt='background'
          fill={true}
        />

        {/* Author Details */}
        <div className='flex items-center absolute top-10 left-10 sm:top-0 sm:left-0'>
          <div className='relative h-[170px] w-[120px] sm:h-[250px] sm:w-[250px]'>
            <Image
              src={author?.image || '/images/author-placeholder.png'}
              alt='book'
              className='p-0 sm:p-9 rounded-full'
              fill={true}
            />
          </div>
          <div className='pl-5 sm:pl-0 space-y-3'>
            <h2 className='text-2xl font-bold text-white'>{author?.name}</h2>
            <p className='text-white'>{author?.email}</p>
          </div>
        </div>
      </div>

      {/* Books Description */}
      <div className='p-7 space-y-4'>
        <h3 className='text-2xl font-semibold text-slate-700'>{books?.length} Books by {author?.name}</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto thin-scrollbar'>
          {books.map((book, index) => (
            <AuthorBookItem book={book} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
