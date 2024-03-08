// named imports
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

// default imports
import Link from 'next/link'

function Hero() {
  return (
    <div>
      <div className='relative h-screen'>
        {/* Background Image */}
        <Image
          className='backdrop-opacity-10 backdrop-invert'
          src='https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='background'
          layout="fill"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

        <div className='absolute top-0 left-0'>
          <div className='flex flex-col justify-center p-10 py-20 sm:py-36 sm:px-40'>
            <div className='flex flex-col space-y-3'>
              <h2
                className='sm:text-7xl text-5xl py-1 font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 via-slate-200 font-bold text-center'
              >
                Unlock Wisdom <br /> Anywhere, Anytime
              </h2>
              <p className='mx-auto text-center sm:text-2xl text-lg font-semibold text-gray-300'>
                With Athena, discovering new ebooks, downloading them instantly, and delighting in their wisdom has never been easier.
              </p>
            </div>

            <div className='mx-auto flex items-center justify-center py-8 space-x-3'>
              <Link
                href='/signin'
                className='px-3 py-2 hover:opacity-80 rounded-full bg-white border font-semibold flex items-center'
              >
                Get Started
                <ArrowRight className='inline-block ml-2' size={16} />
              </Link>
              <Link
                href='/books'
                className='px-3 py-2 hover:opacity-80 rounded-full bg-black border font-semibold text-white flex items-center'
              >
                Explore Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
