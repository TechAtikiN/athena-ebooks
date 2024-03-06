// named imports
import { getUser } from '@/actions/user'

// default imports
import UserProfile from '@/components/profile/UserProfile'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const session = await getServerSession()
  if (!session) {
    redirect('/signin')
  }
  const user = await getUser(session?.user?.email || '')

  return (
    <div className=''>
      <UserProfile user={user} />
    </div>
  )
}
