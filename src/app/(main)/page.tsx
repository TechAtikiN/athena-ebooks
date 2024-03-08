// named imports
import { getBookCategories, getBooks } from '@/actions/books'
import { formatCase } from '@/lib/utils'

// default imports
import Hero from '@/components/books/Hero'
import Categories from '@/components/books/Categories'
import BooksListing from '@/components/books/BooksListing'
import AboutPage from '@/components/books/About'

export default async function HomePage({ searchParams }: { searchParams?: { category: string } }) {
  // format category to title case
  const category = formatCase(searchParams?.category || '') || 'all'

  // get books based on category
  const books = await getBooks(category)

  // get book categories
  let categories = await getBookCategories()
  categories = categories.map((category: { _: any, category: string }) => category?.category)

  return (
    <div>
      <Hero />
      <div className='mx-4 overflow-x-hidden'>
        <h2 className='text-stone-700 text-3xl my-10 font-semibold text-center font-serif'>E-Books Ready for Instant Access&nbsp;📚</h2>

        <Categories categories={categories} category={category} />

        <hr className='my-5' />

        <BooksListing books={books} />

        <AboutPage />
      </div>
    </div>
  )
}
