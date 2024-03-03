// named imports
import { ArrowDownTrayIcon, HeartIcon } from '@heroicons/react/24/outline'

// default imports
import Image from 'next/image'
import Link from 'next/link'

const book = {
  title: 'The monk who sold his Ferrari',
  description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem, omnis nesciunt corporis eius voluptate a quaerat consequuntur alias minus officiis accusamus iure nemo pariatur doloribus iusto sed dignissimos, excepturi sint ut? Fugit tempora quisquam eos ducimus consequuntur debitis, aperiam voluptatibus accusamus. Magni, modi. Veniam sequi aspernatur porro totam eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis, nostrum neque ipsa, fugiat, commodi sit rem provident sint ea culpa alias quibusdam ipsam minus quae quidem recusandae esse? Suscipit fugit, quam architecto ipsum vitae sunt quod repellat qui atque sit magnam neque unde, mollitia cum similique numquam earum enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis qui deserunt laudantium incidunt natus veritatis perferendis rem voluptate molestiae quasi, sed reprehenderit cupiditate in, maiores corporis unde. Animi, nobis!',
  author: {
    name: 'Adam Jones',
    id: 3
  }
}

export default function BookDetailsPage({ params }: { params: { bookId: string } }) {
  return (
    <div className=''>
      <div className='relative w-full h-[265px]'>
        <Image
          className='object-cover'
          src='https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='background'
          layout='fill'
        />
        <div className='flex items-center absolute top-10 left-10 sm:top-0 sm:left-0'>
          <div className='relative h-[170px] w-[120px] sm:h-[270px] sm:w-[220px] rounded-lg'>
            <Image
              src='https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='book'
              className='p-0 sm:p-9'
              layout='fill'
            />
          </div>
          <div className='pl-5 sm:pl-0 space-y-3'>
            <h2 className='text-2xl font-bold text-white'>{book.title}</h2>
            <p className='text-white'>Author:&nbsp;<span className='font-semibold'>{book.author.name}</span></p>

            {/* Favorite and Download button */}
            <div className='sm:flex block sm:space-x-4 sm:space-y-0 space-y-3'>
              <button className='outline-btn '>
                <ArrowDownTrayIcon className='h-5 w-5' />
                <span>Download</span>
              </button>
              <button className='outline-btn'>
                <HeartIcon className='h-5 w-5' />
                <span>Mark As Favorite</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='p-7 space-y-2'>
        <div>
          <h3 className='text-2xl font-semibold text-slate-700'>About the book</h3>
          {/* <span className='text-sm p-1 px-2 my-2 bg-gray-100 rounded-full'>Motivational</span> */}
          <p>{book.description}</p>
        </div>
        <div>
          <h3 className='text-2xl font-semibold text-slate-700'>Author Details</h3>
          <Link href={`/authors/${book.author.id}`} className='font-semibold underline text-accent py-2'>Adam Smith</Link>
        </div>
      </div>
    </div>
  )
}
