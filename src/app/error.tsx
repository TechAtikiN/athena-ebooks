'use client'

// named imports
import Image from 'next/image'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className='flex flex-col min-h-[100vh]'>
          <main className='flex-1 flex flex-col items-center justify-start w-full py-6'>
            <div className='flex flex-col items-center gap-2'>
              <Image src='/images/error.gif' alt='Bug' width={248} height={248} />
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Uh oh! Something went wrong.</h1>
              <p className='max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400'>
                Don&apos;t worry, our team has been notified. You can also try refreshing the page or come back later.
              </p>
            </div>
            <Link
              className='cta-btn w-40 my-4 font-normal'
              href='/'
            >
              Go to HomePage
            </Link>
          </main>
        </div>
      </body>
    </html>
  )
}