'use server'

import { getClient } from "@/lib/graphql-client"
import { ADD_BOOK, GET_BOOKS } from "@/graphql/queries"

export async function createBook(bookData: any) {
  const {data} = await getClient().mutate({
    mutation: ADD_BOOK,
    variables: bookData
  })
  console.log(data.addBook.id)
  return data.addBook.id
}

export async function getBooks() {
  const { data } = await getClient().query({
    query: GET_BOOKS
  })
  console.log(data.books)
  return data.books
}