import { create } from 'zustand'

interface Category {
  category: string
  setCategory: (category: string) => void
}

const useCategoryStore = create<Category>()((set) => ({
  category: 'All',
  setCategory: (category) => set({ category })
}))

export default useCategoryStore