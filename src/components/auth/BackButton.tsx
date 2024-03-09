'use client'

// named imports
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className='flex justify-center text-sm items-center hover:underline hover:text-accent'>
      <ChevronLeftIcon className='h-4 w-4' />
      <span>Back</span>
    </button>
  )
}
