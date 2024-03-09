'use server'

import { getClient } from '@/lib/graphql-client'
import {
  CHECK_FAVORITE,
  GET_BOOK,
  GET_BOOKS,
  GET_BOOKS_BY_QUERY,
  GET_CATEGORIES,
  GET_FAVORITES
} from '@/graphql/queries'
import { revalidateTag } from 'next/cache'
import { ADD_BOOK, ADD_FAVORITE, DELETE_BOOK, UPDATE_BOOK } from '@/graphql/mutations'

const NO_CACHE_CONTEXT = {
  fetchOptions: {
    next: {
      revalidate: 0,
    }
  },
}

// create a new book
export async function createBook(bookData: any) {
  const { data } = await getClient().mutate({
    mutation: ADD_BOOK,
    variables: bookData,
  },)

  return data.addBook.id
}

// get all books
export async function getBooks(category?: string, authorId?: string) {
  const fetchCategory = category === 'all' ? undefined : category
  
  const { data } = await getClient().query({
    query: GET_BOOKS,
    variables: {  category: fetchCategory, authorId },
    context: NO_CACHE_CONTEXT
  })

  return data.books
}

// get a single book
export async function getBook(bookId: string) {
  const { data } = await getClient().query({
    query: GET_BOOK,
    variables: { bookId },
    context: NO_CACHE_CONTEXT
  })

  return data.book
}

// get categories of books
export async function getBookCategories() {
  const { data } = await getClient().query({
    query: GET_CATEGORIES,
    context: NO_CACHE_CONTEXT
  })
  
  return data.books
}

// get books by title or author/search term
export async function getBooksByTitleAuthor(searchTerm: string) {
  const { data } = await getClient().query({
    query: GET_BOOKS_BY_QUERY,
    variables: { searchTerm },
    context: NO_CACHE_CONTEXT
  })
  
  return data.searchBooks
}

// add/remove a book to favorites
export async function setFavoriteBook(userId: string, bookId: string) {
  const { data } = await getClient().mutate({
    mutation: ADD_FAVORITE,
    variables: { userId, bookId },
    context: NO_CACHE_CONTEXT
  })

  return data.addFavoriteBook.message
}

// get all favorite books of logged in user
export async function getFavoriteBooks(userId: string) {
  const { data } = await getClient().query({
    query: GET_FAVORITES,
    variables: { userId },
    context: NO_CACHE_CONTEXT
  })
  
  return data.getFavorites
}

// check if a book is in favorites of logged in user
export async function isFavoriteBook(userId: string, bookId: string) {
  const { data } = await getClient().query({
    query: CHECK_FAVORITE,
    variables: { userId, bookId },
    context: NO_CACHE_CONTEXT
  })
  return data.isFavoriteBook.message
}

// update book details
export async function updateBook(bookData: any) {
  const { data } = await getClient().mutate({
    mutation: UPDATE_BOOK,
    variables: { ...bookData },
    context: NO_CACHE_CONTEXT
  })
  
  return data.updateBook.message
}

// delete book
export async function deleteBook(bookId: string) {
  const { data } = await getClient().mutate({
    mutation: DELETE_BOOK,
    variables: { bookId },
    context: NO_CACHE_CONTEXT
  })

  return data?.deleteBook.message
}

// dekete file from cloud storage: UPLOADTHING
export async function removeFile(fileUrl: string) {
  try {
    const data = fetch(`${process.env.BASE_API_URL}/uploadthing`, {
      method: 'DELETE',
      body: JSON.stringify({ url: fileUrl }),
      headers: { 'Content-Type': 'application/json' }
    })
    
    const result = (await data).json()
    return result
  } catch (error) {
    console.error(error)
  }
}