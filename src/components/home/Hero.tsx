// default imports
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center px-20 py-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-center'>

      <div className='flex flex-col items-center h-44 w-44 relative'>
        <Image
          className='rounded-full'
          layout='fill'
          src='/images/books-gif.webp' alt='books-gif'
        />
      </div>

      <main className='flex-1 flex flex-col mt-4 items-center justify-center text-center'>
        <div className='space-y-3'>
          <h1 className='text-3xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-slate-600'>
            Discover Athena: Your Gateway to Knowledge and Adventure
          </h1>
          <p className='max-w-[600px] mx-auto my-5 text-gray-500 md:text-xl dark:text-gray-400'>
            Explore an unparalleled selection of ebooks across genres, ensuring there&apos;s something for every book lover.
          </p>
        </div>
        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
          <Link
            className='bg-gradient-to-r from-indigo-800 animate-pulse to-blue-600 font-semibold text-white px-6 py-3 my-5'
            href='/write'
          >
            Write your own 📖
          </Link>
        </div>
      </main>
    </div>
  )
}
