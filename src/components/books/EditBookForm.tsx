'use client'

// named imports
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { useState } from 'react'
import { removeFile, updateBook } from '@/actions/books'

// default imports
import UploadBookPdf from '../write/UploadBookPdf'
import UploadBookCover from '../write/UploadBookCover'

export default function EditBookForm({ bookDetails }: { bookDetails: BookDetails }) {
  const [bookCover, setBookCover] = useState<TFile | null>(null)
  const [bookPdf, setBookPdf] = useState<TFile | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  async function updateBookDetails(formData: FormData) {
    // remove the old book cover and pdf
    if (bookCover?.url) {
      await removeFile(bookDetails?.coverImage)
    }

    if (bookPdf?.url) {
      await removeFile(bookDetails?.bookPdf)
    }

    // adding the book cover, pdf, and bookId to the form data
    formData.append('coverImage', bookCover?.url ? bookCover?.url : bookDetails?.coverImage)
    formData.append('bookPdf', bookPdf?.url ? bookPdf?.url : bookDetails?.bookPdf)
    formData.append('bookId', bookDetails?.id)

    // converting the form data to an object
    const bookData = Object.fromEntries(formData.entries())

    // updating the book
    const book = await updateBook(bookData)

    // show toast and redirect to book page
    if (book) {
      toast({
        title: 'Book Updated successfully! 📖',
        description: 'Your book has been updated successfully.'
      })
      router.push(`/books/${bookDetails?.id}`)
    }
  }

  return (
    <form action={updateBookDetails} className='grid sm:grid-cols-3 grid-cols-1 gap-x-14'>
      {/* Book PDF File */}
      <div className='col-span-1'>
        <h3 className='text-lg font-semibold text-slate-700'>Update Book PDF</h3>
        <p className='text-sm text-slate-400'>
          Make sure the size of the file does not exceed 8MB.
        </p>

        {bookPdf && bookPdf?.name ? (
          <div className='flex flex-col space-y-1 my-5'>
            <label className='form-label' htmlFor='pdf'>PDF File</label>
            <div className='flex items-center'>
              <p className='text-slate-700'>{bookPdf?.name}</p>
              <XMarkIcon
                onClick={() => setBookPdf(null)}
                className='w-5 h-5 text-slate-500 cursor-pointer'
              />
            </div>
          </div>
        ) : (
          <div>
            <UploadBookPdf setBookPdf={setBookPdf} />
          </div>
        )}
      </div>

      {/* Book Details */}
      <div className='col-span-2'>
        <h3 className='text-lg font-semibold text-slate-700'>Update Book Details</h3>
        <p className='text-sm text-slate-400'>
          Fill in the updated details of your book.
        </p>

        <div className='my-5 grid sm:grid-cols-2 grid-cols-1 gap-y-5 gap-x-8'>
          <div className='flex flex-col space-y-1'>
            <label className='form-label' htmlFor='title'>Title of the Book</label>
            <input
              name='title'
              type='text'
              id='title'
              className='form-input'
              defaultValue={bookDetails?.title}
            />
          </div>

          <div className='flex flex-col space-y-1'>
            <label className='form-label' htmlFor='category'>Category</label>
            <input
              name='category'
              type='text'
              id='category'
              className='form-input'
              defaultValue={bookDetails?.category}
            />
          </div>

          <div className='flex flex-col space-y-1 col-span-2'>
            <label className='form-label' htmlFor='description'>About the Book</label>
            <textarea
              name='description'
              id='description'
              style={{ resize: 'none' }}
              defaultValue={bookDetails?.description}
              rows={4} className='form-input'></textarea>
          </div>

          {bookCover && bookCover?.name ? (
            <div className='flex flex-col space-y-1 col-span-2'>
              <label className='form-label' htmlFor='cover'>Cover Image of the Book</label>
              <div className='flex items-center'>
                <p className='text-slate-700'>{bookCover?.name}</p>
                <XMarkIcon
                  onClick={() => setBookCover(null)}
                  className='w-5 h-5 text-slate-500 cursor-pointer'
                />
              </div>
            </div>
          ) : (
            <UploadBookCover setBookCover={setBookCover} />
          )}
        </div>

        <button type='submit' className='cta-btn'>Confirm Edit Book</button>
      </div>
    </form>
  )
}
