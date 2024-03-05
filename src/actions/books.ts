'use server'

import { getClient } from "@/lib/graphql-client"
import { ADD_BOOK } from "@/graphql/queries"

export async function createBook(bookData: any) {
  const {data} = await getClient().mutate({
    mutation: ADD_BOOK,
    variables: bookData
  })
  console.log(data.addBook.id)
  return data.addBook.id
}