// named imports
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

const GRAPHQL_ENDPOINT =
process.env.NODE_ENV === 'production' ? 'https://athena-ebooks.vercel.app/api/graphql' : 'http://localhost:3000/api/graphql'

// SERVER SIDE GRAPHQL IMPLEMENTATION
export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
  })
})
