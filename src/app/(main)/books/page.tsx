// named imports
import { getBooks } from '@/actions/books'
import { formatCase } from '@/lib/utils'

// default imports
import Hero from '@/components/home/Hero'
import Categories from '@/components/home/Categories'
import BooksListing from '@/components/home/BooksListing'

export default async function HomePage({ searchParams }: { searchParams?: { category: string } }) {
  // format category to title case
  const category = formatCase(searchParams?.category || '') || 'all'

  // get books based on category
  const books = await getBooks(category)

  return (
    <div>
      <Hero />
      <div className='mx-4 overflow-x-hidden'>
        <h2 className='text-stone-700 text-3xl my-10 font-semibold text-center font-serif'>E-Books Ready for Instant Access📚</h2>

        <Categories category={category} />

        <hr className='my-5' />

        <BooksListing books={books} />

      </div>
    </div>
  )
}
