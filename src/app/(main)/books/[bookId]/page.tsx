// named imports
import { getBook } from '@/actions/books'
import { getServerSession } from 'next-auth'
import { getUser } from '@/actions/user'

// default imports
import Image from 'next/image'
import Link from 'next/link'
import DownloadButton from '@/components/books/DownloadButton'
import FavoriteButton from '@/components/books/FavoriteButton'

export default async function BookDetailsPage({ params }: { params: { bookId: string } }) {
  const session = await getServerSession()
  const user = await getUser(session?.user?.email || '')
  const book: BookDetails = await getBook(params.bookId)

  return (
    <div className='text-slate-700'>
      <div className='relative w-full h-[265px]'>
        <Image
          className='object-cover'
          src='/images/book-bg.avif'
          alt='background'
          layout='fill'
        />
        <div className='flex items-center absolute top-10 left-10 sm:top-0 sm:left-0'>
          <div className='relative h-[170px] w-[120px] sm:h-[270px] sm:w-[220px] rounded-lg'>
            <Image
              src={book?.coverImage}
              alt='book'
              className='p-0 sm:p-9'
              layout='fill'
            />
          </div>

          <div className='pl-5 sm:pl-0 space-y-3'>
            <h2 className='text-2xl font-bold text-white'>{book?.title}</h2>
            <p className='text-white'>Author:&nbsp;<span className='font-semibold'>{book?.author?.name}</span></p>

            {/* Favorite and Download button */}
            {/* display buttons only if user is logged in or else display login button */}
            {session ? (
              <div className='flex space-x-4'>
                <FavoriteButton userId={user.id} bookId={params.bookId} />
                <DownloadButton book={book?.bookPdf} title={book?.title} />
              </div>
            ) : (
              <Link href='/signin' className='outline-btn'>Sign in for Instant Download</Link>
            )}

          </div>
        </div>
      </div>

      {/* Description */}
      <div className='p-7 space-y-2'>
        <div>
          <h3 className='text-2xl font-semibold text-slate-700'>About the book</h3>
          <span className='text-sm font-semibold text-slate-700 px-2 my-2 p-1 bg-accent/30 rounded-full'>{book?.category}</span>
          <p>{book?.description}</p>
        </div>
        <div className='space-y-2'>
          <h3 className='text-2xl font-semibold text-slate-700'>Author Details</h3>
          <Link href={`/authors/${book.author.id}`} className='font-semibold underline text-accent py-2'>{book?.author?.name}</Link>
          <p>{book?.author?.description}</p>
          <div className=''>
            <p>Email:&nbsp;<span className='font-semibold'>{book.author.email}</span></p>
            <p>{book?.author?.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
