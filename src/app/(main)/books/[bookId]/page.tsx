// named imports
import { getBook } from '@/actions/books'
import { getServerSession } from 'next-auth'
import { getUser } from '@/actions/user'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { redirect } from 'next/navigation'

// default imports
import Image from 'next/image'
import Link from 'next/link'
import DownloadButton from '@/components/books/DownloadButton'
import FavoriteButton from '@/components/books/FavoriteButton'


export default async function BookDetailsPage({ params }: { params: { bookId: string } }) {
  const session = await getServerSession()
  const user: User = await getUser(session?.user?.email || '')
  const book: BookDetails = await getBook(params?.bookId)

  if (!book) redirect('/')

  return (
    <div className='text-slate-700'>
      {/* Book details */}
      <div className='relative w-full h-[265px]'>
        <Image
          className='object-cover'
          src='/images/book-bg.avif'
          alt='background'
          fill={true}
        />
        <div className='flex items-center absolute top-10 left-10 sm:top-0 sm:left-0'>
          <div className='relative h-[170px] w-[120px] sm:h-[270px] sm:w-[220px] rounded-lg'>
            <Image
              src={book?.coverImage}
              alt='book'
              className='p-0 sm:p-9'
              fill={true}
            />
          </div>

          <div className='pl-5 sm:pl-0 space-y-3'>
            <h2 className='text-2xl font-bold text-white'>{book?.title}</h2>
            <p className='text-white'>Author:&nbsp;<span className='font-semibold'>{book?.author?.name}</span></p>

            {/* Favorite and Download button */}
            {/* display buttons only if user is logged in or else display login button */}
            {session?.user ? (
              <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:flex sm:space-x-4'>
                <FavoriteButton userId={user?.id} bookId={params?.bookId} />
                <DownloadButton
                  book={book?.bookPdf}
                  title={book?.title}
                  userEmail={user?.email}
                  userName={user?.name} />
              </div>
            ) : (
              <Link href='/signin' className='outline-btn'>Sign in for Instant Download</Link>
            )}

          </div>
        </div>
      </div>

      {/* Description */}
      <div className='px-7 space-y-6 pt-8 pb-20'>
        <div className='space-y-3'>
          <h3 className='text-2xl font-semibold text-slate-700'>About the Book</h3>
          <p className='text-sm w-fit font-semibold text-slate-700 px-2 my-2 p-1 bg-accent/30 rounded-full'>
            {book?.category}
          </p>
          <p>{book?.description}</p>
        </div>
        <div className='space-y-2'>
          <h3 className='text-2xl font-semibold text-slate-700'>Know the Author</h3>
          <Link
            href={`/authors/${book?.author?.id}`}
            className='flex space-x-2 items-center text-accent hover:text-accent-hover cursor-pointer'
          >
            <p className='font-medium underline py-2'>{book?.author?.name}</p> <ArrowTopRightOnSquareIcon className='w-4 h-4 inline' />
          </Link>
          <p>
            <span className='font-medium'>Location:</span>&nbsp;{book?.author?.location}
          </p>
          <p>{book?.author?.description}</p>
        </div>
      </div>
    </div>
  )
}
