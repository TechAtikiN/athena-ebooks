// named imports
import {
  ArrowDownTrayIcon,
  BookOpenIcon,
  PencilSquareIcon,
  UsersIcon
} from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Explore Books',
    description:
      'Discover a diverse collection of ebooks. Find your next read with ease.',
    icon: BookOpenIcon,
  },
  {
    name: 'Download and Read',
    description:
      'Download ebooks instantly and enjoy them offline. Dive into captivating stories anytime, anywhere.',
    icon: ArrowDownTrayIcon,
  },
  {
    name: 'Browse Authors',
    description:
      'Explore talented authors and their works. Uncover literary treasures.',
    icon: UsersIcon,
  },
  {
    name: 'Write Your Own Book',
    description:
      'Start your own literary journey. Unleash your imagination and craft your masterpiece.',
    icon: PencilSquareIcon,
  }
]


export default function AboutPage() {
  return (
    <div className='bg-white py-24 sm:py-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>

        {/* Headings */}
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-slate-600'>
            Welcome to Athena, where your next great read awaits!
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-accent'>
            Begin your reading journey with us!
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Explore an unparalleled selection of ebooks across genres, ensuring ther&apos;s something for every book lover.
          </p>
        </div>

        {/* Features */}
        <div className='mx-auto max-w-2xl mt-10 lg:max-w-4xl'>
          <div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='bg-accent/20 hover:bg-accent/40 rounded-lg p-3 relative pl-16'>
                <dt className='text-base flex items-center font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-4 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent'>
                    <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
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