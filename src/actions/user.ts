'use server'

import { GET_USER } from "@/graphql/queries"
import { getClient } from "@/lib/graphql-client"
import { getSession } from "next-auth/react"

export async function getUser() {
  const session = await getSession()

  const data = await getClient().query({
    query: GET_USER,
    variables: {
      email: session?.user?.email
    }
  })
  console.log(data)
}

