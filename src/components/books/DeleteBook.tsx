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
import { deleteBook } from '@/actions/books'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

export default function DeleteBook({ bookId }: { bookId: string }) {
  const router = useRouter()
  const { toast } = useToast()

  const handleDeleteBook = async () => {
    const data = await deleteBook(bookId)
    console.log(data)
    if (data) {
      toast({
        title: 'Book Deleted successfully! 📖',
        description: 'Your book has been deleted successfully.'
      })
      router.push(`/books`)
    } else {
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
          <DialogTitle>Delete book</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this book? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <form action={handleDeleteBook} className='mx-auto'>
            <button className='bg-rose-500 hover:rose-600 px-3 py-2 rounded-full text-white' type='submit'>Save changes</button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
