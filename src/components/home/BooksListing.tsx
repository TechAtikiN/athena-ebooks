// named imports
import { getBooks } from '@/actions/books'

// default imports
import BookItem from './BookItem'

export default async function BooksListing({ books }: { books: Book[] }) {

  return (
    <div className='m-3'>
      {/* books listing */}
      <div className='grid sm:grid-cols-4 grid-cols-2 gap-5'>
        {books.map((book, index) => (
          <BookItem book={book} key={index} />
        ))}
      </div>
    </div>
  )
}
