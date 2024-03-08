// named imports
import { features } from '@/constants/features'

export default function About() {
  return (
    <div className='py-28 sm:py-10 bg-gradient-to-tl from-indigo-400 via-sky-300 to-violet-300'>
      <div className='sm:mx-auto max-w-7xl mx-4'>

        {/* Headings */}
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-4xl font-extrabold tracking-tight text-sky-600'>
            Begin your reading journey with us!
          </p>
          <p className='mt-4 text-lg text-sky-600'>
            Explore an unparalleled selection of ebooks across genres, ensuring ther&apos;s something for every book lover.
          </p>
        </div>

        {/* Features */}
        <div className='mx-auto max-w-2xl mt-10 lg:max-w-4xl'>
          <div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.name} className='bg-white/40 shadow-lg hover:bg-white/60 rounded-xl p-3 relative pl-16'>
                <dt className='text-base flex items-center font-semibold leading-7 text-gray-700'>
                  <div className='absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg'>
                    <feature.image className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='mt-2'>{feature.name}</p>
                </dt>
                <dd className='text-sm leading-7 text-gray-600'>{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}