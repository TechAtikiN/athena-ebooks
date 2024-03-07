'use client'

// named imports
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// default imports
import Link from 'next/link'

export default function Component() {
  const [count, setCount] = useState(5)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount)
    }, 1000)

    if (count === 0) {
      router.push('/')
    }

    return () => clearInterval(interval)
  }, [count, router])

  return (
    <div className='flex flex-col my-40'>
      <main className='flex-1 flex flex-col items-center justify-center text-center'>
        <div className='space-y-3'>
          <h1 className='text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl'>Oops! Page Not Found</h1>
          <p className='max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400'>
            We couldnt find the page youre looking for. It may have been moved or deleted.
          </p>
        </div>
        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
          <Link
            className='px-3 py-2 my-3 bg-accent/85 hover:bg-accent/80 w-full rounded-sm font-bold border border-accent'
            href='/home'
          >
            Go to Homepage
          </Link>
        </div>
        <div className='flex items-center justify-center mt-8 text-gray-500 dark:text-gray-400'>
          <p className='text-sm'>
            Redirecting in <span className='text-lg font-bold'>{count}</span> seconds...
          </p>
        </div>
      </main>
    </div>
  )
}

