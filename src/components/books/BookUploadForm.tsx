'use client'

// named imports
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { createBook } from '@/actions/books'
import { useQuery } from '@apollo/client'
import { GET_USER } from '@graphql/queries'
import { useSession } from 'next-auth/react'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { sendMail } from '@/actions/mail'
import { compileMailTemplate } from '@/lib/mail/mail'
import { debounce } from 'lodash'

// default imports
import UploadBookCover from '@/components/write/UploadBookCover'
import UploadBookPdf from '@/components/write/UploadBookPdf'

export default function BookUploadForm() {
  // state variables
  const [bookCover, setBookCover] = useState<TFile | null>(null)
  const [bookPdf, setBookPdf] = useState<TFile | null>(null)
  const [authorId, setAuthorId] = useState<string | null>(null)
  const { toast } = useToast()
  const router = useRouter()

  const { data: session } = useSession()
  const { data: user } = useQuery(GET_USER, { variables: { email: session?.user?.email } })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setAuthorId(user?.user?.id)
    }
  }, [user])

  // function to add book
  async function addBook(formData: FormData) {
    setLoading(true)

    if (!bookCover || !bookPdf) {
      toast({
        title: "Error! 📖",
        description: "Please upload the book cover and pdf file.",
      })
      setLoading(false)
      return
    }

    // adding the book cover, pdf, and authorId to the form data
    formData.append('coverImage', bookCover?.url as string)
    formData.append('bookPdf', bookPdf?.url as string)
    formData.append('authorId', authorId as string)

    // converting the form data to an object
    const bookData = Object.fromEntries(formData.entries())

    try {
      const book = await createBook(bookData)
      if (book) {
        router.push(`/books`)
        toast({
          title: "New Book added! 📖",
          description: "Your book has been created successfully.",
        })

        // send email to author
        await sendMail({
          to: user?.user?.email,
          name: user?.user?.name,
          subject: '📚 Thank You for Publishing Your Book!',
          body: compileMailTemplate(
            `Hello ${user?.user?.name}`,
            'Thank You for Publishing Your Book!',
            `Don't forget to share your book with your friends and family!`)
        })
      }
    } catch (error) {
      toast({
        title: "Error! 📖",
        description: "An error occurred while creating the book.",
      })
    }
    setLoading(false)
  }

  const debouncedAddBook = debounce(addBook, 2000)

  return (
    <form
      action={debouncedAddBook}
      className='grid sm:grid-cols-3 grid-cols-1 gap-x-14'
    >
      {/* Book PDF File */}
      <div className='col-span-1'>
        <h3 className='text-lg font-semibold text-slate-700'>Upload Book PDF</h3>
        <p className='text-sm text-slate-400'>
          Make sure the size of the file does not exceed 8MB.
        </p>

        {bookPdf ? (
          <div className='flex flex-col space-y-1 my-5'>
            <label className='form-label' htmlFor='pdf'>PDF File</label>
            <div className='flex items-center space-x-1'>
              <p className='text-slate-800font-semibold'>
                <span className='font-normal'>Uploaded File:</span>&nbsp;{bookPdf?.name}
              </p>
              <XMarkIcon
                onClick={() => setBookPdf(null)}
                className='w-5 h-5 text-rose-500 cursor-pointer'
              />
            </div>
            <p className='text-sm'>
              File Size: &nbsp;
              <span className='text-sm space-x-2'>
                {/* format as file size */}
                {bookPdf?.size > 1024
                  ? `${(bookPdf?.size / 1024).toFixed(2)} KB`
                  : `${bookPdf?.size} B`}
              </span>
            </p>
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
            <label className='form-label' htmlFor='title'>Title of the Book</label>
            <input required name="title" type='text' id='title' className='form-input' />
          </div>

          <div className='flex flex-col space-y-1'>
            <label className='form-label' htmlFor='category'>Category</label>
            <input required name="category" type='text' id='category' className='form-input' />
          </div>

          <div className='flex flex-col space-y-1 col-span-2'>
            <label className='form-label' htmlFor='description'>About the Book</label>
            <textarea
              required
              name="description"
              id="description"
              style={{ resize: 'none' }}
              rows={4} className='form-input'></textarea>
          </div>

          {bookCover ? (
            <div className='flex flex-col space-y-1 col-span-2'>
              <label className='form-label' htmlFor='cover'>Cover Image of the Book</label>
              <div className='flex items-center space-x-1'>
                <p className='text-slate-800font-semibold'>
                  <span className='font-normal'>Uploaded File:</span>&nbsp;{bookCover?.name}
                </p>
                <XMarkIcon
                  onClick={() => setBookCover(null)}
                  className='w-5 h-5 text-rose-500 cursor-pointer'
                />
              </div>
              <p className='text-sm'>
                File Size: &nbsp;
                <span className='text-sm space-x-2'>
                  {/* format as file size */}
                  {bookCover?.size > 1024
                    ? `${(bookCover?.size / 1024).toFixed(2)} KB`
                    : `${bookCover?.size} B`}
                </span>
              </p>
            </div>
          ) : (
            <UploadBookCover setBookCover={setBookCover} />
          )}
        </div>

        <button
          disabled={loading}
          type='submit'
          className='cta-btn'
        >
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </div>
    </form>
  )
}
