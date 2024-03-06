// named imports
import { getUser } from '@/actions/user'

// default imports
import UserProfile from '@/components/profile/UserProfile'

export default async function ProfilePage() {
  const user = await getUser()

  return (
    <div className=''>
      <UserProfile user={user} />
    </div>
  )
}
