import { categories } from "@/constants/categories";

export default function Categories() {
  return (
    <div className='mx-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center space-x-4'>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`h-16 w-36 opacity-95 hover:opacity-100 bg-gradient-to-tl border m-4 shadow-sm flex flex-col items-center justify-center rounded-md
          ${index % 6 === 0 ? 'from-slate-200 via-lime-200 to-lime-500' :
              index % 6 === 1 ? 'from-slate-200 via-emerald-200 to-emerald-500' :
                index % 6 === 2 ? 'from-slate-200 via-pink-200 to-pink-500' :
                  index % 6 === 3 ? 'from-slate-200 via-blue-200 to-blue-500' :
                    index % 6 === 4 ? 'from-slate-200 via-cyan-200 to-cyan-500' :
                      index % 6 === 5 ? 'from-slate-200 via-indigo-200 to-indigo-500' :
                        'from-blue-200 to-blue-500'}
            ${category === 'All' && 'underline'}`
          }
        >
          <h3 className='text-slate-700 font-semibold m-auto'>{category}</h3>
        </button>
      ))}
    </div>
  )
}
