// named imports
import { getUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

// default imports
import UserProfile from '@/components/profile/UserProfile'

export const revalidate = 0

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
