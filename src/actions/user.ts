'use server'

// named imports
import { GET_USER, UPDATE_USER } from '@/graphql/queries'
import { getClient } from '@/lib/graphql-client'
import { getServerSession } from 'next-auth'

export async function getUser(email: string) {

  const data = await getClient().query({
    query: GET_USER,
    variables: {
      email: email
    }
  })
  return data?.data?.user
}

export async function updateUser(userData: any) {
  const {data} = await getClient().mutate({
    mutation: UPDATE_USER,
    variables: {
      authorDescription: userData.authorDescription,
      location: userData.location,
      authorId: userData.authorId
    }
  })
  
  return data?.updateUser?.id
}