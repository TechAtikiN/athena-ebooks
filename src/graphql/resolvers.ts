import { PrismaClient } from "@prisma/client"

type Context = {
  prisma: PrismaClient
}

export const resolvers = {
  Query: {
    // retrieve all books and their authors
    books: async (parents: any, args: any, context: Context) => {
      return await context.prisma.book.findMany({
          include: {
            author: true
          }
      })
    },

    // retrieve a single book and its author
    book: async (parents: any, args: any, context: Context) => {
      return await context.prisma.book.findUnique({
        where: {
          id: args.id
        },
        include: {
          author: true
        }
      })
    },
  },

  Mutation: {
    // add a new user
    addUser: async (parents: any, args: any, context: Context) => {
    return await context.prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
        image: args.image
      }
    })
  }}
}
