'use client'

// named imports
import { useEffect, useState } from 'react'
import { getBooksByTitleAuthor } from '@/actions/books'
import { formatCase } from '@/lib/utils'
import { debounce } from 'lodash'
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover'

// default imports
import Image from 'next/image'
import Link from 'next/link'

type SearchItem = {
  id: string
  title: string
  coverImage: string
  author: {
    name: string
  }
}

export default function Search() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState<SearchItem[]>([])

  const handleSearch = async (search: string) => {
    setLoading(true)
    const data = await getBooksByTitleAuthor(formatCase(search))
    setBooks(data)
    setLoading(false)
  }

  const debouncedSearch = debounce(handleSearch, 500)

  const showPopover = books?.length > 0 && search?.length > 0

  useEffect(() => {
    const closePopover = (e: MouseEvent) => {
      if (!e.composedPath().includes(document?.getElementById('search-parent')!)) {
        setBooks([])
      }
    }
    document.addEventListener('click', closePopover)
  }, [])

  return (
    <div
      id='search-parent'
      className='w-1/2'>
      <Popover open={showPopover}>
        <PopoverTrigger asChild>
          <input
            id='search-book'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              debouncedSearch(e.target.value)
            }}
            // focus the input again if showPopover is true
            onBlur={() => showPopover && setTimeout(() => document?.getElementById('search-book')?.focus(), 0)}
            type='text'
            className={`w-full p-2 px-4 border border-gray-300 rounded-full text-sm focus:outline-none shadow-sm ${loading ? 'cursor-wait border-accent animate-pulse' : 'cursor-text'
              }`}
            placeholder={loading ? 'Loading...' : 'Search for books by Title'}
          />
        </PopoverTrigger>

        <PopoverContent
          align='start'
          side='bottom'
          sideOffset={10}
          className='bg-white border h-[240px] thin-scrollbar overflow-y-auto border-gray-300 rounded-xl font-medium text-sm w-fit lg:w-[30rem] shadow'
        >
          {books?.map((book) => (
            <Link
              href={`/books/${book?.id}`}
              key={book?.id} className='flex items-center space-x-3 p-2 hover:bg-accent/10 last:rounded-b-xl first:rounded-t-xl'
            >
              <Image height={10} width={10} src={book?.coverImage} alt={book?.title} className='w-10 h-10 object-cover rounded-md' />
              <div>
                <h3 className='text-sm font-semibold'>{book?.title}</h3>
                {
                  book?.author?.name && (
                    <p className='text-xs text-slate-500'>By&nbsp;<span className='italic font-semibold'>{book?.author?.name}</span></p>
                  )
                }
              </div>
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
