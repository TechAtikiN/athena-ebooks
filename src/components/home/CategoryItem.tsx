// named imports
import { usePathname, useRouter } from 'next/navigation'

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

export default function CategoryItem({ activeCategory, name, index }: { activeCategory: string, name: string, index: number }) {
  const router = useRouter()
  const pathname = usePathname()

  // get color for category
  const getColor = (index: number, type: 'base' | 'active') => {
    const COLORS = type === 'base' ? BASE_COLORS : ACTIVE_COLORS
    return COLORS[index % COLORS.length]
  }

  // handle category change
  const handleChangeCategory = (name: string) => {
    const path = name === 'all' ? `${pathname}` : `${pathname}?category=${name.toLowerCase()}`
    router.replace(path, { scroll: false });
  }

  return (
    <div
      className={`p-[2px] rounded-md shadow bg-gradient-to-br ${getColor(index, 'base')} ${getColor(index, 'active')} backdrop-filter backdrop-blur-3xl shadow-inner transition-all duration-150 ease-in-out hover:bg-opacity-90 hover:scale-105 hover:rotate-1 hover:z-10`}
    >
      <button
        onClick={() => handleChangeCategory(name)}
        className={`bg-white min-w-20 rounded-md py-[6px] px-4 text-gray-600 font-semibold whitespace-nowrap ${getColor(index, 'active')}
          ${activeCategory === name ?
            `text-white bg-gradient-to-br ${getColor(index, 'active')}` : ''}`}
      >
        <h3>
          {name.charAt(0).toUpperCase() + name.substring(1)}
        </h3>
      </button>
    </div>
  )
}
