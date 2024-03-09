// named imports
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { updateUser } from '@/actions/user'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

export default function EditUserDetails({ userId, desciption, location }: { userId: string, desciption?: string, location?: string }) {
  const router = useRouter()
  const { toast } = useToast()

  async function updateUserDetails(formData: FormData) {
    // converting the form data to an object
    let userData = Object.fromEntries(formData.entries())
    userData.authorId = userId

    // updating the book
    const data = await updateUser(userData)
    if (!data) {
      toast({
        title: "Error!",
        description: "Your details could not be updated.",
      })
    } else {
      toast({
        title: "Success!",
        description: "User details updated successfully",
      })
      router.refresh()
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='absolute bottom-1 right-1'>
          <PencilSquareIcon className='h-10 w-10 bg-white p-2 rounded-full shadow' />
        </button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            <p className='text-2xl text-gray-600'>
              Edit profile
            </p>
          </DialogTitle>
          <DialogDescription>
            <p className='text-gray-400'>
              Add more details about yourself that will be displayed on your profile.
            </p>
          </DialogDescription>
        </DialogHeader>

        <hr className='my-1' />

        <form action={updateUserDetails} className='flex flex-col space-y-4'>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='authorDescription' className='text-left form-label text-gray-600'>
              Description
            </label>
            <textarea
              rows={5}
              name='authorDescription'
              defaultValue={desciption || undefined}
              id='authorDescription'
              placeholder='This will be displayed to users on your books and profile.'
              className='form-input text-sm'>
            </textarea>
          </div>

          <div className='flex flex-col space-y-1'>
            <label htmlFor='location' className='text-left form-label text-gray-600'>
              Location
            </label>
            <input
              id='location'
              defaultValue={location || undefined}
              name='location'
              placeholder='India, UK..'
              className='form-input text-sm py-2'
            />
          </div>

          <div className='py-2'>
            <hr />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <button className='cta-btn' type='submit'>Save changes</button>
            </DialogClose>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}
