// named imports
import { TrashIcon } from '@heroicons/react/24/solid'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { deleteBook, removeFile } from '@/actions/books'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

export default function DeleteBook({ bookId, bookPdf, bookCover }: { bookId: string, bookPdf: string, bookCover: string }) {
  const router = useRouter()
  const { toast } = useToast()

  const handleDeleteBook = async () => {
    console.log(bookPdf, bookCover, bookId)
    try {
      // remove book from the database
      const data = await deleteBook(bookId)

      if (data) {
        const pdfRes = await removeFile(bookPdf)

        const coverRes = await removeFile(bookCover)
      }

      if (data) {
        toast({
          title: 'Book Deleted successfully! 📖',
          description: 'Your book has been deleted successfully.'
        })
        router.push(`/books`)
      } else {
        throw new Error('Something went wrong. Please try again later.')
      }
    } catch (error: any) {
      toast({
        title: 'Error! 😢',
        description: 'Something went wrong. Please try again later.'
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <TrashIcon className='h-5 w-5 cursor-pointer text-rose-500 hover:text-rose-600' />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-center'>Delete book</DialogTitle>
          <DialogDescription className='text-justify'>
            Are you sure you want to delete this book? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <form action={handleDeleteBook} className='mx-auto'>
            <button
              className='bg-red-500 font-semibold hover:bg-rose-600 px-3 py-2 rounded-md text-white'
              type='submit'
            >
              Delete Book
            </button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
