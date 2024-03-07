'use client'

// named imports
import { isFavoriteBook, setFavoriteBook } from '@/actions/books'
import { HeartIcon } from '@heroicons/react/24/solid'
import { useToast } from '../ui/use-toast'
import { useEffect, useState } from 'react'

export default function FavoriteButton({ userId, bookId }: { userId: string, bookId: string }) {
  const [isFavorite, setIsFavorite] = useState<Boolean | null>(null)
  const { toast } = useToast()

  // check if book is already in favorites
  useEffect(() => {
    async function checkFavorite() {
      const status = await isFavoriteBook(userId, bookId)
      if (status === true) {
        setIsFavorite(true)
      } else if (status === false) {
        setIsFavorite(false)
      }
    }
    checkFavorite()
  }, [userId, bookId])

  // add or remove book from favorites
  const handleAddFav = async (bookId: string) => {
    const status = await setFavoriteBook(userId, bookId)
    if (status === true) {
      setIsFavorite(true)
      toast({
        title: "Success! 🎉",
        description: "Book added to favorites",
      })
    } else if (status === false) {
      setIsFavorite(false)
      toast({
        title: "Removed! 😢",
        description: "Book removed from favorites"
      })
    }
  }

  return (
    <button
      onClick={() => handleAddFav(bookId)}
      className='outline-btn w-40'>
      <HeartIcon className={`w-5 h-5 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`} />
      <span>
        {isFavorite ? 'Remove' : 'Add'}
      </span>
    </button>
  )
}
