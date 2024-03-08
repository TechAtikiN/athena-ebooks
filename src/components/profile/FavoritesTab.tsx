// named imports
import { useQuery } from '@apollo/client'
import { GET_FAVORITES } from '@/graphql/queries'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

// default imports
import AuthorBookItem from '../authors/AuthorBookItem'
import Loader from '../global/Loader'

export default function FavoritesTab({ userId }: { userId: string }) {
  let { data, loading } = useQuery(GET_FAVORITES, {
    variables: { userId },
  })

  if (loading) return <div className='flex flex-col justify-center items-center'><Loader /></div>

  const favBooks = data?.getFavorites

  return (
    <div className='space-y-2 m-5'>
      {favBooks?.length > 0 && (
        <h3 className='text-2xl font-semibold text-slate-700 mb-5'>
          You&apos;ve {favBooks?.length} Favorite books
        </h3>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto thin-scrollbar'>
        {favBooks.length > 0 ? favBooks?.map((book: Book, index: number) => (
          <AuthorBookItem book={book} key={index} />
        )) :
          <div className='col-span-2 text-slate-500 py-10'>
            <div className='flex justify-center items-center space-x-2'>
              <ExclamationCircleIcon className='h-8 w-8 text-rose-500' />
              <p className='text-lg font-semibold'>
                You haven&apos;t added any books to favorites yet
              </p>
            </div>
          </div>}
      </div>
    </div>
  )
}
