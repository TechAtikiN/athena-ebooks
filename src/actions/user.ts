'use server'

// named imports
import { UPDATE_USER } from '@/graphql/mutations'
import { GET_USER } from '@/graphql/queries'
import { getClient } from '@/lib/graphql-client'

// get user by email
export async function getUser(email: string) {
  const data = await getClient().query({
    query: GET_USER,
    variables: {
      email: email.trim()
    },
    context: {
      fetchOptions: {
        next: {
          revalidate: 0,
        }
      }
    }
  })
  
  return data?.data?.user
}

// update user data of description and location
export async function updateUser(userData: any) {
  const {data} = await getClient().mutate({
    mutation: UPDATE_USER,
    variables: {
      authorDescription: userData.authorDescription.trim(),
      location: userData.location.trim(),
      authorId: userData.authorId
    },
    context: {
      fetchOptions: {
        next: {
          revalidate: 0,
        }
      }
    }
  })
  
  return data?.updateUser?.id
}