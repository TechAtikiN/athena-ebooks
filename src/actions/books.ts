'use server'

import { getClient } from '@/lib/graphql-client'
import { ADD_BOOK, ADD_FAVORITE, CHECK_FAVORITE, GET_BOOK, GET_BOOKS, GET_CATEGORIES, GET_CATEGORY_BOOKS, GET_FAVORITES } from '@/graphql/queries'
import { revalidateTag } from 'next/cache'

export async function createBook(bookData: any) {
  const { data } = await getClient().mutate({
    mutation: ADD_BOOK,
    variables: bookData,
  },)
  revalidateTag('get-books')
  return data.addBook.id
}

export async function setFavoriteBook(userId: string, bookId: string) {
  console.log('userId',userId,'bookId',bookId)
  const { data } = await getClient().mutate({
    mutation: ADD_FAVORITE,
    variables: { userId, bookId },
  })
  console.log('data',data)
  return data.addFavoriteBook.message
}

export async function getBooks(category?: string, authorId?: string) {
  const fetchCategory = category === 'all' ? undefined : category
  
  const { data } = await getClient().query({
    query: GET_BOOKS,
    variables: {  category: fetchCategory, authorId },
    context: {
      fetchOptions: {
        next: { tags: ['get-books'] }
      },
    }
  })
  
  return data.books
}

export async function getBook(bookId: string) {
  const { data } = await getClient().query({
    query: GET_BOOK,
    variables: { bookId }
  })
  return data.book
}

export async function getBookCategories() {
  const { data } = await getClient().query({
    query: GET_CATEGORIES
  })
  const categories = data.books.map((book: any) => book.category)
  const uniqueCategories: string[] = Array.from(new Set(categories))
  return uniqueCategories
}

export async function getCategoryBooks(searchTerm: string) {
  const { data } = await getClient().query({
    query: GET_CATEGORY_BOOKS,
    variables: { searchTerm },
  })
  console.log(data)
  return data.searchBooks
}

export async function getFavoriteBooks(userId: string) {
  const { data } = await getClient().query({
    query: GET_FAVORITES,
    variables: { userId },
  })
  console.log(data)
  return data.getFavorites
}

export async function isFavoriteBook(userId: string, bookId: string) {
  const { data } = await getClient().query({
    query: CHECK_FAVORITE,
    variables: { userId, bookId },
  })
  return data.isFavoriteBook.message
}