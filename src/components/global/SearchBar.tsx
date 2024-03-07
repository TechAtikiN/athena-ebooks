'use client'

// named imports
import { useEffect, useRef, useState } from 'react'
import { getBooksByTitleAuthor } from '@/actions/books'
import { formatCase } from '@/lib/utils'
import { debounce } from "lodash"

// default imports
import Link from 'next/link'
import Image from 'next/image'
import Loader from './Loader'

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
  const [books, setBooks] = useState<CategoryBook[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // close search results when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearch('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // debounced search
  const debouncedSearch = debounce(async (search: string) => {
    setLoading(true)
    const data = await getBooksByTitleAuthor(formatCase(search))
    setBooks(data)
    setLoading(false)
  }, 600)

  // handle search
  const handleSearch = (search: string) => {
    setSearch(search)
    debouncedSearch(search)
  }

  return (
    <div ref={searchRef} className='w-1/2'>
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        type='text'
        className='w-full p-2 px-4 border border-slate-200 rounded-full text-sm focus:outline-none'
        placeholder='Search by Book Title or Author'
      />


      {/* search results  */}
      {loading && search ? (
        <div className='absolute z-30 h-[100px] flex flex-col items-center justify-center w-[47%] top-14 left[100px] sm:left-[250px] bg-white border border-slate-200 rounded-md shadow-lg'>
          <Loader />
        </div>
      ) :
        search && books.length > 0 ? (
          <div
            className='space-y-2 h-[300px] overflow-y-auto thin-scrollbar absolute z-30 w-[47%] top-14 left[100px] sm:left-[250px] bg-white border border-slate-200 rounded-xl shadow-lg'>
            {books?.length > 0 && (
              books?.map((book) => (
                <Link
                  href={`/books/${book?.id}`}
                  key={book?.id} className='flex items-center space-x-3 p-2 hover:bg-accent/10 last:rounded-b-xl first:rounded-t-xl'
                >
                  <Image height={10} width={10} src={book?.coverImage} alt={book?.title} className='w-10 h-10 object-cover rounded-md' />
                  <div>
                    <h3 className='text-sm font-semibold'>{book?.title}</h3>
                    <p className='text-xs text-slate-500'>By&nbsp;<span className='italic font-semibold'>{book?.author?.name}</span></p>
                  </div>
                </Link>
              ))
            )}
          </div>
        ) : (
          search && !loading && (
            <div className='absolute z-30 h-[100px] flex flex-col items-center justify-center w-[47%] top-14 left-[250px] bg-white border border-slate-200 rounded-md shadow-lg'>
              <p className='p-2 text-sm'>No books found</p>
            </div>
          )
        )}
    </div>
  )
}
