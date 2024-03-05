// named imports
import { books } from '@/constants/books'

// default imports
import BookItem from './BookItem'

export default function BooksListing() {
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
