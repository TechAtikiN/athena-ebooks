// default imports
import AuthorBookItem from '../authors/AuthorBookItem'

interface Props {
  books: Book[]
}

export default function MyBooksTab({ books }: Props) {
  console.log(books)
  return (
    <div className='space-y-2 m-5'>
      <h3 className='text-2xl font-semibold text-slate-700 mb-5'>You&apos;ve published {books?.length} books</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 h-[500px] overflow-y-auto thin-scrollbar'>
        {books ? books?.map((book, index) => (
          <AuthorBookItem book={book} key={index} />
        )) : <p className='text-lg text-slate-500'>You haven&apos;t published any books yet</p>}
      </div>
    </div>
  )
}
