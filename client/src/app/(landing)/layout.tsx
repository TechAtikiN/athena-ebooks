// default imports
import Footer from '@/components/global/Footer'

export default function DashboardLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
