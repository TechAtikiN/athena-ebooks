// default imports
import Navbar from '@/components/global/Navbar'

export default function DashboardLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        {children}
      </div>
    </div>
  )
}
