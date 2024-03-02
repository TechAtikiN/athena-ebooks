'use client'

// named imports
import { categories } from '@/constants/categories'
import { usePathname, useRouter } from 'next/navigation'

// default imports
import useCategoryStore from '@/store/useCategoryStore'

const BASE_COLORS = [
  'from-zinc-300 via-zinc-500 to-zinc-700',
  'from-lime-300 via-lime-500 to-lime-700',
  'from-emerald-300 via-emerald-500 to-emerald-700',
  'from-pink-300 via-pink-500 to-pink-700',
  'from-blue-300 via-blue-500 to-blue-700',
  'from-orange-300 via-orange-500 to-orange-700',
  'from-indigo-300 via-indigo-500 to-indigo-700',
]

const ACTIVE_COLORS = [
  'hover:from-zinc-400 hover:via-zinc-600 hover:to-zinc-800',
  'hover:from-lime-400 hover:via-lime-600 hover:to-lime-800',
  'hover:from-emerald-400 hover:via-emerald-600 hover:to-emerald-800',
  'hover:from-pink-400 hover:via-pink-600 hover:to-pink-800',
  'hover:from-blue-400 hover:via-blue-600 hover:to-blue-800',
  'hover:from-orange-400 hover:via-orange-600 hover:to-orange-800',
  'hover:from-indigo-400 hover:via-indigo-600 hover:to-indigo-800',
]

export default function Categories() {
  const router = useRouter()
  const pathname = usePathname()

  const [categoryState, setCategory] = useCategoryStore((state) => [state.category, state.setCategory])

  // update category state 
  const handleCategory = (category: string) => {
    setCategory(category.toLowerCase())
    router.push(`${pathname}?category=${category.toLowerCase()}`)
  }

  // get color for category
  const getColor = (index: number, type: 'base' | 'active') => {
    const COLORS = type === 'base' ? BASE_COLORS : ACTIVE_COLORS
    return COLORS[index % COLORS.length]
  }

  return (
    <div className='max-w-5xl mx-auto overlfow-x-scroll relative'>
      <div className='absolute inset-0 bg-gradient-to-r from-transparent to-white z-[-1]'></div>

      <div className='flex items-center space-x-4 overflow-x-scroll py-2 thin-scrollbar'>
        {[...categories, ...categories].map((category, index) => (
          <div
            key={`${category}_${index}`}
            className={`p-[2px] rounded-md shadow bg-gradient-to-br ${getColor(index, 'base')} ${getColor(index, 'active')} backdrop-filter backdrop-blur-3xl shadow-inner transition-all duration-150 ease-in-out hover:bg-opacity-90 hover:scale-105 hover:rotate-1 hover:z-10`}
          >
            <button
              onClick={() => handleCategory(category)}
              className={`bg-white min-w-20 rounded-md py-[6px] px-4 text-gray-600 font-semibold whitespace-nowrap ${getColor(index, 'active')}
              ${categoryState === category.toLowerCase() ? `text-white bg-gradient-to-br ${getColor(index, 'active')}` : ''}`}
            >
              <h3>
                {category}
              </h3>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
