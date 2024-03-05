// named imports
import { gql } from '@apollo/client'
import { getClient } from '@/lib/graphql-client'

// default imports
import Categories from '@/components/home/Categories'
import BooksListing from '@/components/home/BooksListing'

// bypass the cache
export const dynamic = "force-dynamic";

const query = gql`
  query {
    books {
    authorId
    bookPdf
    category
    coverImage
    createdAt
    description
    id
    title
    updatedAt
    author {
      books {
        authorId
        bookPdf
        category
        coverImage
        createdAt
        description
        id
        title
        updatedAt
      }
      createdAt
      email
      id
      image
      name
      updatedAt
    }
  }
  }
`

export default async function HomePage() {
  const { data } = await getClient().query<Response>({
    query,
  })

  return (
    <div className='mx-4 overflow-x-hidden'>
      <h2 className='text-stone-700 text-3xl my-10 font-semibold text-center font-serif'>E-Books Ready for Instant Access📚</h2>

      <Categories />
      <hr className='my-5' />
      <BooksListing />
    </div>
  )
}
