'use client'

import { categories } from "@/constants/categories";
import useCategoryStore from "@/store/useCategoryStore";
import { usePathname, useRouter } from "next/navigation";

export default function Categories() {
  const [categoryState, setCategory] = useCategoryStore((state) => [state.category, state.setCategory])
  const router = useRouter()
  const pathname = usePathname()

  const handleCategory = (category: string) => {
    setCategory(category.toLowerCase())
    router.push(`${pathname}?category=${category.toLowerCase()}`)
  }

  return (
    <div className='mx-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center space-x-4'>
      {categories.map((category, index) => (
        <button
          onClick={() => handleCategory(category)}
          key={index}
          className={`h-16 w-36 opacity-95 hover:opacity-100 bg-gradient-to-tl border m-4 shadow-sm flex flex-col items-center justify-center rounded-md
          ${index % 6 === 0 ? 'from-slate-200 via-lime-200 to-lime-500' :
              index % 6 === 1 ? 'from-slate-200 via-emerald-200 to-emerald-500' :
                index % 6 === 2 ? 'from-slate-200 via-pink-200 to-pink-500' :
                  index % 6 === 3 ? 'from-slate-200 via-blue-200 to-blue-500' :
                    index % 6 === 4 ? 'from-slate-200 via-cyan-200 to-cyan-500' :
                      index % 6 === 5 ? 'from-slate-200 via-indigo-200 to-indigo-500' :
                        'from-blue-200 to-blue-500'}
              ${categoryState === category ? 'border-2 border-slate-300 underline' : 'border-2 border-transparent'}
            `
          }
        >
          <h3 className='text-slate-700 font-semibold m-auto'>{category}</h3>
        </button>
      ))}
    </div>
  )
}
