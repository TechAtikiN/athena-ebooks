// named imports
import { getServerSession } from 'next-auth'
import { getBooks } from '@/actions/books'

// default imports
import AuthorBookItem from '@/components/authors/AuthorBookItem'
import Image from 'next/image'

export default async function AuthorDetailsPage({ params }: { params: { authorId: string } }) {
  const books: Book[] = await getBooks(undefined, params.authorId)
  const author = books[0]?.author

  return (
    <div className=''>
      {/* Background Image */}
      <div className='relative w-full h-[265px]'>
        <Image
          className='object-cover'
          src='https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='background'
          layout='fill'
        />

        {/* Author Details */}
        <div className='flex items-center absolute top-10 left-10 sm:top-0 sm:left-0'>
          <div className='relative h-[170px] w-[120px] sm:h-[250px] sm:w-[250px]'>
            <Image
              src={author?.image || 'https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt='book'
              className='p-0 sm:p-9 rounded-full'
              layout='fill'
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
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 h-[500px] overflow-y-auto thin-scrollbar'>
          {books.map((book, index) => (
            <AuthorBookItem book={book} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
