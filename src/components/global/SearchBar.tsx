'use client'

// named imports
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { getCategoryBooks } from '@/actions/books'
import { formatCase } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Link from 'next/link'

type CategoryBook = {
  id: string
  title: string
  coverImage: string
  author: {
    name: string
  }
}

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  let books: CategoryBook[] = []

  const handleSearch = useDebouncedCallback(async (value: string) => {
    setSearch(value)
    books = await getCategoryBooks(formatCase(search))
    console.log(books)
  })

  return (
    <Popover
    >
      <div className='w-1/2'>
        <PopoverTrigger asChild>
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            type='text'
            className='w-full p-2 px-3 border border-slate-200 rounded-full text-sm focus:outline-none'
            placeholder='Search by books title or authors'
          />
        </PopoverTrigger>
      </div>
    </Popover>
  )
}
