'use client'

// named imports
import { SessionProvider } from 'next-auth/react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

export default function Providers({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_CLIENT_URI as string,
    cache: new InMemoryCache()
  })

  return (
    <SessionProvider>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </SessionProvider>
  )
}
