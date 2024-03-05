// named imports
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { useSession } from 'next-auth/react'
import { useQuery } from '@apollo/client'
import { GET_USER } from '@/graphql/queries'
import { updateUser } from '@/actions/user'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

export default function EditUserDetails() {
  const router = useRouter()
  const { toast } = useToast()
  const { data: session } = useSession()
  const { data: user } = useQuery(GET_USER, { variables: { email: session?.user?.email } })

  async function updateUserDetails(formData: FormData) {

    // converting the form data to an object
    let userData = Object.fromEntries(formData.entries())
    userData.authorId = user?.user?.id

    // creating the book
    const data = await updateUser(userData)
    console.log(data)
    if (!data) {
      toast({
        title: "Error! 📖",
        description: "Your details could not be updated.",
      })
    } else {
      toast({
        title: "Success",
        description: "User details updated successfully",
      })
      router.refresh()
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='absolute bottom-0 right-0 text-slate-500 hover:text-slate-600'>
          <PencilSquareIcon className='h-7 w-7 font-semibold' />
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Add more details about yourself that will be displayed on your profile.
          </DialogDescription>
        </DialogHeader>
        <form action={updateUserDetails} className='flex flex-col space-y-3'>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='authorDescription' className='text-left form-label'>
              Description
            </label>
            <textarea rows={5} name='authorDescription' id='authorDescription' placeholder='A short description about you' className='form-input text-sm'></textarea>
          </div>
          <div className='flex flex-col space-y-1'>
            <label htmlFor='location' className='text-left form-label'>
              Location
            </label>
            <input id='location' name='location' placeholder='India, UK..' className='form-input text-sm' />
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
