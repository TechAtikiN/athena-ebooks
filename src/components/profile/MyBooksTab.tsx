// default imports
import AuthorBookItem from '../authors/AuthorBookItem'

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

export default function MyBooksTab() {
  return (
    <div className='space-y-2'>
      <h3 className='text-2xl font-semibold text-slate-700 mb-5'>You&apos;ve published {books.length} books</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {books.map((book, index) => (
          <AuthorBookItem book={book} key={index} />
        ))}
      </div>
    </div>
  )
}
