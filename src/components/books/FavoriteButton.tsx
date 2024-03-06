'use client'

// named imports
import { setFavoriteBook } from '@/actions/books'
import { HeartIcon } from '@heroicons/react/24/solid'
import { useToast } from '../ui/use-toast'
import { useEffect, useState } from 'react'

export default function FavoriteButton({ userId, bookId }: { userId: string, bookId: string }) {
  const [isFavorite, setIsFavorite] = useState<Boolean | null>(null)

  useEffect(() => {
    async function isFavoriteBook() {
      const status = await setFavoriteBook(userId, bookId)
      console.log(status)
      if (status === true) {
        setIsFavorite(true)
      } else if (status === false) {
        setIsFavorite(false)
      }
    }
    isFavoriteBook()
  }, [])

  const { toast } = useToast()
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
      className='outline-btn w-48'>
      <HeartIcon className='h-5' />
      <span>
        {isFavorite ? 'Remove' : 'Add'}
      </span>
    </button>
  )
}
