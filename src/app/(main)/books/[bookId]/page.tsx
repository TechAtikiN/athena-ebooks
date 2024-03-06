// named imports
import { getBook } from '@/actions/books'
import { HeartIcon } from '@heroicons/react/24/outline'
import { getServerSession } from 'next-auth'

// default imports
import Image from 'next/image'
import Link from 'next/link'
import DownloadButton from '@/components/books/DownloadButton'

export default async function BookDetailsPage({ params }: { params: { bookId: string } }) {
  const session = await getServerSession()
  const book: BookDetails = await getBook(params.bookId)

  return (
    <div className='text-slate-700'>
      <div className='relative w-full h-[265px]'>
        <Image
          className='object-cover'
          src='https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                <button className='outline-btn'>
                  <HeartIcon className='h-5' />
                  <span>Favorite</span>
                </button>
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
          {/* <span className='text-sm p-1 px-2 my-2 bg-gray-100 rounded-full'>Motivational</span> */}
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
