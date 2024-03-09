// default imports
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import { getServerSession } from 'next-auth'

export default async function DashboardLayout(
  { children }: { children: React.ReactNode }
) {
  const session = await getServerSession()

  return (
    <div>
      <Navbar session={session} />
      <div className='max-w-7xl mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
