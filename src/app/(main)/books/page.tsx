// named imports
import { getBooks } from '@/actions/books'

// default imports
import Categories from '@/components/home/Categories'
import BooksListing from '@/components/home/BooksListing'

export default async function HomePage() {
  const books: Book[] = await getBooks()

  const categories = new Set<string>()
  books.forEach((book) => categories.add(book.category))
  const uniqueCategories = Array.from(categories)

  return (
    <div className='mx-4 overflow-x-hidden'>
      <h2 className='text-stone-700 text-3xl my-10 font-semibold text-center font-serif'>E-Books Ready for Instant Access📚</h2>

      <Categories categories={uniqueCategories} />

      <hr className='my-5' />

      <BooksListing books={books} />
    </div>
  )
}
