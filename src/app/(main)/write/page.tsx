import BookUploadForm from '@/components/books/BookUploadForm'

export default function CreateBook() {
  return (
    <div className='mx-3 p-7'>
      <h3 className='mb-3 text-2xl text-slate-700 font-semibold'>Start Your Writing Journey 📖</h3>
      <hr className='my-5' />

      <BookUploadForm />
    </div>
  )
}
