import { PrismaClient } from '@prisma/client'

type Context = {
  prisma: PrismaClient
}

export const resolvers = {
  Query: {
    // retrieve all books and their authors
    books: async (parents: any, args: any, context: Context) => {
      // check if category is provided in the query
      if (args.category) {
        return await context.prisma.book.findMany({
          where: {
            category: args.category
          },
          include: {
            author: true
          }
        })
      } else {
        return await context.prisma.book.findMany({
          include: {
            author: true
          }
      })
    }
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

    // retrieve a single user
    user: async (parents: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          email: args.email
        }
      })
    }
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
    },
    // add a new book
    addBook: async (parents: any, args: any, context: Context) => {
      // creating a new book
      const newBook = await context.prisma.book.create({
        data: {
          title: args.title,
          description: args.description,
          category: args.category,
          coverImage: args.coverImage,
          bookPdf: args.bookPdf,
          authorId: args.authorId,
        }
      })
      // returning the new book
      return newBook
    },
    updateUser: async (parents: any, args: any, context: Context) => {
      // updating the user
      const updatedUser = await context.prisma.user.update({
        where: {
          id: args.authorId
        },
        data: {
          description: args.authorDescription,
          location: args.location
        }
      })
      // returning the updated user
      return updatedUser
    }
  }
}
