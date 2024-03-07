// named imports
import { useQuery } from '@apollo/client'
import { GET_FAVORITES } from '@/graphql/queries'

// default imports
import AuthorBookItem from '../authors/AuthorBookItem'

export default function FavoritesTab({ userId }: { userId: string }) {
  let { data, loading } = useQuery(GET_FAVORITES, {
    variables: { userId },
  })

  if (loading) return <p>Loading...</p>

  const favBooks = data?.getFavorites

  return (
    <div className='space-y-2 m-5'>
      <h3 className='text-2xl font-semibold text-slate-700 mb-5'>You&apos;ve {favBooks?.length} Favorite books</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 h-[450px] overflow-y-auto thin-scrollbar'>
        {favBooks ? favBooks?.map((book: Book, index: number) => (
          <AuthorBookItem book={book} key={index} />
        )) :
          <p className='text-lg text-slate-500'>You haven&apos;t added any books to your favorites yet</p>}
      </div>
    </div>
  )
}
