'use client'

// named imports
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '@/graphql/queries'

// default imports
import CategoryItem from './CategoryItem'
import Loader from '../global/Loader'

export default function Categories({ category }: { category: string }) {
  const { data: categories, loading } = useQuery(GET_CATEGORIES)

  if (loading) return <div className='flex flex-col justify-center items-center'><Loader /></div>

  // extracting unique categories
  let uniqueCategories: string[] = Array.from(new Set(categories?.books?.map((book: any) => book?.category)))

  return (
    <div className='max-w-5xl mx-auto overlfow-x-scroll relative'>
      <div className='absolute inset-0 bg-gradient-to-r from-transparent to-white z-[-1]'></div>

      <div id='categories' className='flex items-center space-x-4 overflow-x-auto py-2 thin-scrollbar'>
        {uniqueCategories && ['all', ...uniqueCategories]?.map((cat, index) => (
          <CategoryItem key={`${cat}_${index}`} activeCategory={category} name={cat} index={index} />
        ))}
      </div>
    </div>
  )
}
