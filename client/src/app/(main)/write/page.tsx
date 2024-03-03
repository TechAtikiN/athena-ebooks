// named imports
import { PhotoIcon } from '@heroicons/react/24/solid'

export default function CreateBook() {
  return (
    <div className='mx-3 p-7'>
      <h3 className='mb-3 text-2xl text-slate-700 font-semibold'>Start Your Writing Journey 📖</h3>
      <hr className='my-5' />
      <form action='' className='grid sm:grid-cols-3 grid-cols-1 gap-x-14'>

        {/* Book PDF File */}
        <div className='col-span-1'>
          <h3 className='text-lg font-semibold text-slate-700'>Upload Media</h3>
          <p className='text-sm text-slate-400'>
            Upload the book PDF file, size should not exceed 10MB.
          </p>
          <div className='space-y-3 my-5'>
            <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
              <div className='text-center'>
                <PhotoIcon className='mx-auto h-12 w-12 text-gray-300' />
                <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                  <label
                    htmlFor='book'
                    className='relative cursor-pointer rounded-md bg-white font-semibold'
                  >
                    <input className='ml-10' required id='book' name='book' type='file' />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className='col-span-2'>
          <h3 className='text-lg font-semibold text-slate-700'>Upload Book Details</h3>
          <p className='text-sm text-slate-400'>
            Fill in the details of your book. The title, author, genre, and a brief description of the book.
          </p>

          <div className='my-5 grid sm:grid-cols-2 grid-cols-1 gap-y-5 gap-x-8'>
            <div className='flex flex-col space-y-1 col-span-2'>
              <label className='form-label' htmlFor="name">Title of the Book</label>
              <input type="text" className='form-input' />
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

            <div className='flex flex-col space-y-1'>
              <label className='form-label' htmlFor="cover">Cover Image of the Book</label>
              <input type="file" id='cover' className='form-input text-sm' />
            </div>

            <div className='flex flex-col space-y-1'>
              <label className='form-label' htmlFor="name">Category</label>
              <input type="text" id='category' className='form-input' />
            </div>
          </div>

          <button type='submit' className='cta-btn'>Publish</button>
        </div>
      </form>
    </div>
  )
}
