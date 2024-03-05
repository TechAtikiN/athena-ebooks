'use server'

import { UPDATE_USER } from '@/graphql/queries'
import { getClient } from '@/lib/graphql-client'

// export async function getUser() {
//   const session = await getSession()

//   const data = await getClient().query({
//     query: GET_USER,
//     variables: {
//       email: session?.user?.email
//     }
//   })
//   return data?.data?.user
// }

export async function updateUser(userData: any) {
  const {data} = await getClient().mutate({
    mutation: UPDATE_USER,
    variables: {
      authorDescription: userData.authorDescription,
      location: userData.location,
      authorId: userData.authorId
    }
  })
  console.log(data)
  return data?.updateUser?.id
}