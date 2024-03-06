// default imports
import AuthorBookItem from '../authors/AuthorBookItem'

interface Props {
  books: Book[]
}

export default function MyBooksTab({ books }: Props) {
  return (
    <div className='space-y-2'>
      <h3 className='text-2xl font-semibold text-slate-700 mb-5'>You&apos;ve published {books.length} books</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {books.map((book, index) => (
          <AuthorBookItem book={book} key={index} />
        ))}
      </div>
    </div>
  )
}
