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
    uri: process.env.NODE_ENV === 'production' ? 'https://athena-ebooks.vercel.app/api/graphql' : 'http://localhost:3000/api/graphql',
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
