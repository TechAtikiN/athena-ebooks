'use client'

// named imports
import { isFavoriteBook, setFavoriteBook } from '@/actions/books'
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as OutlinedHeartIcon } from '@heroicons/react/24/outline'
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
      className='outline-btn w-40 flex items-center space-x-2 hover:opacity-85'>
      {isFavorite ? <SolidHeartIcon className='h-6 w-6 text-rose-400' /> : <OutlinedHeartIcon className='h-6 w-6' />}
      <span>
        {isFavorite ? 'Remove' : 'Favorite'}
      </span>
    </button>
  )
}
