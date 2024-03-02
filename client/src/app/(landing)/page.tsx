// named imports
import { authOptions } from '@/lib/auth';
import { Session, getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session: Session | null = await getServerSession(authOptions)
  if (session) {
    redirect('/home')
  }

  return (
    <div className=''>
      landing page
    </div>
  )
}
