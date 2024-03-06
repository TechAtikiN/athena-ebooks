// named imports
import { getBookCategories, getBooks } from '@/actions/books'

// default imports
import Categories from '@/components/home/Categories'
import BooksListing from '@/components/home/BooksListing'
import { Suspense } from 'react'

export default async function HomePage({ searchParams }: { searchParams?: { category: string } }) {
  // format category to title case
  const category = searchParams?.category?.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())

  const books = category === 'All' ? await getBooks() : await getBooks(category)

  const categories: string[] = await getBookCategories()

  return (
    <div className='mx-4 overflow-x-hidden'>
      <h2 className='text-stone-700 text-3xl my-10 font-semibold text-center font-serif'>E-Books Ready for Instant Access📚</h2>

      <Categories categories={categories} />

      <hr className='my-5' />

      <Suspense fallback={<div>Loading...</div>}>
        <BooksListing books={books} />
      </Suspense>
    </div>
  )
}
