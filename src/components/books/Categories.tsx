'use client'

// default imports
import CategoryItem from './CategoryItem'

export default function Categories({ category, categories }: { category: string, categories: string[] }) {
  return (
    <div className='max-w-5xl mx-auto overlfow-x-scroll relative'>
      {/* <div className='absolute inset-0 bg-gradient-to-r from-transparent to-white z-[-1]'></div> */}

      <div id='categories' className='flex items-center space-x-4 overflow-x-auto py-2 thin-scrollbar'>
        {categories && ['all', ...categories]?.map((cat, index) => (
          <CategoryItem key={`${cat}_${index}`} activeCategory={category} name={cat} index={index} />
        ))}
      </div>
    </div>
  )
}
