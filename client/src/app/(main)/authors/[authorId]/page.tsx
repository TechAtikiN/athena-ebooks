// named imports
import { ArrowDownTrayIcon, HeartIcon } from '@heroicons/react/24/outline'
import { getServerSession } from 'next-auth'

// default imports
import Image from 'next/image'
import Link from 'next/link'

const books = [
  {
    id: 1,
    title: 'How to win friends and influence people',
    category: 'Motivational',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem, omnis nesciunt corporis eius voluptate a quaerat consequuntur alias minus officiis accusamus iure nemo pariatur doloribus iusto sed dignissimos, excepturi sint ut? Fugit tempora quisquam eos ducimus consequuntur debitis, aperiam voluptatibus accusamus. Magni, modi. Veniam sequi aspernatur porro totam eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis, nostrum neque ipsa, fugiat, commodi sit rem provident sint ea culpa alias quibusdam ipsam minus quae quidem recusandae esse? Suscipit fugit, quam architecto ipsum vitae sunt quod repellat qui atque sit magnam neque unde, mollitia cum similique numquam earum enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis qui deserunt laudantium incidunt natus veritatis perferendis rem voluptate molestiae quasi, sed reprehenderit cupiditate in, maiores corporis unde. Animi, nobis!',
    author: {
      name: 'Adam Jones',
      id: 3
    }
  },
  {
    id: 2,
    title: 'The monk who sold his Ferrari',
    category: 'Motivational',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem, omnis nesciunt corporis eius voluptate a quaerat consequuntur alias minus officiis accusamus iure nemo pariatur doloribus iusto sed dignissimos, excepturi sint ut? Fugit tempora quisquam eos ducimus consequuntur debitis, aperiam voluptatibus accusamus. Magni, modi. Veniam sequi aspernatur porro totam eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis, nostrum neque ipsa, fugiat, commodi sit rem provident sint ea culpa alias quibusdam ipsam minus quae quidem recusandae esse? Suscipit fugit, quam architecto ipsum vitae sunt quod repellat qui atque sit magnam neque unde, mollitia cum similique numquam earum enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis qui deserunt laudantium incidunt natus veritatis perferendis rem voluptate molestiae quasi, sed reprehenderit cupiditate in, maiores corporis unde. Animi, nobis!',
    author: {
      name: 'Adam Jones',
      id: 3
    }
  }
]

export default async function AuthorDetailsPage({ params }: { params: { authorId: string } }) {
  const session = await getServerSession()

  return (
    <div className=''>
      <div className='relative w-full h-[265px]'>
        <Image
          className='object-cover'
          src='https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='background'
          layout='fill'
        />
        <div className='flex items-center absolute top-10 left-10 sm:top-0 sm:left-0'>
          <div className='relative h-[170px] w-[120px] sm:h-[250px] sm:w-[250px]'>
            <Image
              src={session?.user?.image || 'https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt='book'
              className='p-0 sm:p-9 rounded-full'
              layout='fill'
            />
          </div>
          <div className='pl-5 sm:pl-0 space-y-3'>
            <h2 className='text-2xl font-bold text-white'>{session?.user?.name}</h2>
            <p className='text-white'>{session?.user?.email}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='p-7 space-y-2'>
        <h3 className='text-2xl font-semibold text-slate-700'>{books.length} Books by {session?.user?.name}</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {books.map((book, index) => (
            <Link
              href={`/books/${book.id}`}
              key={index}
              className='hover:bg-slate-100 flex space-x-4 justify-between items-start bg-white rounded-lg p-5'
            >
              <div className='relative object-cover h-[200px] w-[400px]'>
                <Image
                  src='https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='book'
                  className='rounded-sm'
                  layout='fill'
                />
              </div>
              <div className='space-y-2'>
                <h3 className='text-xl font-semibold'>{book.title}</h3>
                <p className='text-gray-600 text-sm mb-2'>{book.description.slice(0, 150)}...</p>
                <span className="bg-accent/20 text-accent font-bold text-xs me-2 px-2.5 py-0.5 rounded-full">{book.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
