// defualt imports
import Image from 'next/image'

export default function AuthLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div className='md:grid md:grid-cols-12 h-screen'>
      <div className='col-span-6 relative'>
        <Image
          className='object-fill'
          fill={true}
          src='https://images.unsplash.com/photo-1605419589330-0b6dede4c265?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='hero'
        />
        <div>
          <h2 className='absolute p-3 text-7xl bottom-12 text-white font-light font-serif w-3/4'>Unlock the Wisdom</h2>
          <p
            className='absolute p-3 w-3/4 text-sm my-2 bottom-0 text-white font-light'
          >
            Empowering Minds, One E-Book at a Time
          </p>
        </div>
      </div>
      <div className='col-span-6'>
        {children}
      </div>
    </div>
  )
}
