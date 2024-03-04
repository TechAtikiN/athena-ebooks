// named imports
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { PrismaClient } from '@prisma/client'
import { prisma } from '../../../prisma/db'

type Context = {
  prisma: PrismaClient
}

// typedefs for documenting schema, queries and mutations
const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    description: String!
    category: String
    coverImage: String
    bookPdf: String!
    createdAt: String!
    updatedAt: String!
    author: User
    authorId: ID!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    image: String
    createdAt: String!
    updatedAt: String!
    books: [Book]
  }

  type Query {
    book(id:ID!): Book
    books: [Book]
  }
`

// resolvers for handling queries and mutations
const resolvers = {
  Query: {
    books: async (parents: any, args: any, context: Context) => {
      return await context.prisma.book.findMany({
          include: {
            author: true
          }
      })
    },
    book: async (parents: any, args: any, context: Context) => {
      return await context.prisma.book.findUnique({
        where: {
          id: args.id
        },
        include: {
          author: true
        }
      })
    }
  },
}

const apolloServer = new ApolloServer<Context>({ resolvers, typeDefs })

export default startServerAndCreateNextHandler(apolloServer, {
  context: async(req, res) => ({req, res, prisma})
})
