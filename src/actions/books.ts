'use server'

import { getClient } from '@/lib/graphql-client'
import { ADD_BOOK, GET_BOOK, GET_BOOKS } from '@/graphql/queries'
import { revalidateTag } from 'next/cache'

export async function createBook(bookData: any) {
  const { data } = await getClient().mutate({
    mutation: ADD_BOOK,
    variables: bookData,
  },)
  revalidateTag('get-books')
  return data.addBook.id
}

export async function getBooks() {
  const { data } = await getClient().query({
    query: GET_BOOKS,
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