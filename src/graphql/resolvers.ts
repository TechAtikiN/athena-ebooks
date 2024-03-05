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
    // create a new user
    addUser: async (parents: any, args: any, context: Context) => {
      // checking if the user already exists
      const user = await context.prisma.user.findUnique({
        where: {
          email: args.email
        }
      })

      // if the user exists, returning the user
      if (user) return user
      
      // if the user does not exist, creating the user
      const newUser = await context.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          image: args.image
        }
      })
  
      // returning the new user
      return newUser
  }}
}
