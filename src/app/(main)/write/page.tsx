'use client'

// named imports
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

// default imports
import UploadBookCover from '@/components/write/UploadBookCover'
import UploadBookPdf from '@/components/write/UploadBookPdf'

export default function CreateBook() {
  const [bookCover, setBookCover] = useState<TFile | null>(null)
  const [bookPdf, setBookPdf] = useState<TFile | null>(null)
  console.log('bookCover: ', bookCover);
  console.log('bookPdf: ', bookPdf);

  return (
    <div className='mx-3 p-7'>
      <h3 className='mb-3 text-2xl text-slate-700 font-semibold'>Start Your Writing Journey 📖</h3>
      <hr className='my-5' />

      <form action='' className='grid sm:grid-cols-3 grid-cols-1 gap-x-14'>
        {/* Book PDF File */}
        <div className='col-span-1'>
          <h3 className='text-lg font-semibold text-slate-700'>Upload Media</h3>
          <p className='text-sm text-slate-400'>
            Upload the book PDF file, size should not exceed 8MB.
          </p>
          {bookPdf ? (
            <div className='flex flex-col space-y-1 my-5'>
              <label className='form-label' htmlFor="pdf">PDF File</label>
              <div className='flex items-center'>
                <p className='text-slate-700'>{bookPdf.name}</p>
                <XMarkIcon
                  onClick={() => setBookPdf(null)}
                  className='w-5 h-5 text-slate-500 cursor-pointer'
                />
              </div>
            </div>
          ) : (
            <UploadBookPdf setBookPdf={setBookPdf} />
          )}
        </div>

        {/* Book Details */}
        <div className='col-span-2'>
          <h3 className='text-lg font-semibold text-slate-700'>Upload Book Details</h3>
          <p className='text-sm text-slate-400'>
            Fill in the details of your book. The title, author, genre, and a brief description of the book.
          </p>

          <div className='my-5 grid sm:grid-cols-2 grid-cols-1 gap-y-5 gap-x-8'>
            <div className='flex flex-col space-y-1'>
              <label className='form-label' htmlFor="name">Title of the Book</label>
              <input type="text" className='form-input' />
            </div>

            <div className='flex flex-col space-y-1'>
              <label className='form-label' htmlFor="name">Category</label>
              <input type="text" id='category' className='form-input' />
            </div>

            <div className='flex flex-col space-y-1 col-span-2'>
              <label className='form-label' htmlFor="description">About the Book</label>
              <textarea
                style={{ resize: 'none' }}
                rows={4} className='form-input'></textarea>
            </div>

            <div className='flex flex-col space-y-1 col-span-2'>
              <label className='form-label' htmlFor="authorDescription">About the Author</label>
              <textarea
                style={{ resize: 'none' }}
                rows={2} className='form-input'></textarea>
            </div>

            {bookCover ? (
              <div className='flex flex-col space-y-1 col-span-2'>
                <label className='form-label' htmlFor="cover">Cover Image of the Book</label>
                <div className='flex items-center'>
                  <p className='text-slate-700'>{bookCover.name}</p>
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

          <button type='submit' className='cta-btn'>Publish</button>
        </div>
      </form>
    </div>
  )
}
