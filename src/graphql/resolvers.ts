import { PrismaClient } from '@prisma/client'

type Context = {
  prisma: PrismaClient
}

export const resolvers = {
  Query: {
    // retrieve all books and their authors
    books: async (parents: any, args: any, context: Context) => {
      // check if authorId is provided
      if (args.authorId) {
        return await context.prisma.book.findMany({
          where: {
            authorId: args.authorId
          },
          include: {
            author: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        })
      }

      // check if category is provided
      if (args.category) {
        return await context.prisma.book.findMany({
          where: {
            category: args.category
          },
          include: {
            author: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        })
      } 

      // if authorId and category are not provided, return all books
      const books = await context.prisma.book.findMany({
        include: {
          author: true
          },
        orderBy: {
            createdAt: 'desc'
          }
      })
      if (books) {
        return books
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
        },
        include: {
          books: true
        }
      })
    },

    // retrive books searched by title or author
    searchBooks: async (parents: any, args: any, context: Context) => {
      const books = await context.prisma.book.findMany({
        where: {
          OR: [
            {
              title: {
                contains: args.searchTerm
              }
            },
            {
              author: {
                name: {
                  contains: args.searchTerm
                }
              }
            }
          ]
        },
        include: {
          author: true
        }
      })

      return books
    },

    // retrieve all favorite books of a user
    getFavorites: async (parents: any, args: any, context: Context) => {
      // get all favorites of a user
      const favorites = await context.prisma.favorite.findMany({
        where: {
          userId: args.userId
        }
      })

      // get all books that are in the favorites
      const books = await context.prisma.book.findMany({
        where: {
          id: {
            in: favorites.map(favorite => favorite.bookId)
          }
        }
      })

      // return the books
      return books
    },

    // check if a book is in the user's favorite
    isFavoriteBook: async (parents: any, args: any, context: Context) => {
      // check if the book is in the user's favorite
      const favorite = await context.prisma.favorite.findFirst({
        where: {
          userId: args.userId,
          bookId: args.bookId
        }
      })

      // if the book is in the user's favorite, return message
      if (favorite) return { message: true }

      // if the book is not in the user's favorite, return message
      return { message: false }
    },

    // retrieve all book categories
    bookCategories: async (parents: any, args: any, context: Context) => {
      // get all books
      const books = await context.prisma.book.findMany()

      // get all categories
      const categories = books?.map(book => book.category)

      // return unique categories
      return Array.from(new Set(categories))
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
      // validation
      if (!args.authorId) {
        return { message: 'Author ID is required' }
      }

      const user = await context.prisma.user.findUnique({
        where: {
          id: args.authorId
        }
      })

      if (!user) {
        return { message: 'User does not exist' }
      }

      if (!args.title || !args.description || !args.bookPdf || !args.category || !args.coverImage) {
        return { message: 'Title, description, and book PDF are required' }
      }

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
    },

    // add a book to user's favorite
    addFavoriteBook: async (parents: any, args: any, context: Context) => {
      // get userId and bookId from args
      const { userId, bookId } = args

      // check if the book is already in the user's favorite
      const favorite = await context.prisma.favorite.findFirst({
        where: {
          userId,
          bookId
        }
      })

      // if the book is in the user's favorite, remove the book from the user's favorite
      if (favorite) {
        await context.prisma.favorite.delete({
          where: {
            id: favorite.id
          }
        })

        // return message that the book has been removed from the favorite
        return { message: false }
      }

      // if the book is not in the user's favorite, add the book to the user's favorite
      await context.prisma.favorite.create({
        data: {
          userId,
          bookId
        }
      })

      // return message that the book has been added to the favorite
      return { message: true }
    },

    // update a book
    updateBook: async (parents: any, args: any, context: Context) => {
      // updating the book
      const updatedBook = await context.prisma.book.update({
        where: {
          id: args.bookId
        },
        data: {
          title: args.title,
          description: args.description,
          category: args.category,
          coverImage: args.coverImage,
          bookPdf: args.bookPdf
        }
      })
      
      // return message as true if the book is updated
      if (updatedBook) return { message: true }
      
      // return message as false if the book is not updated
      return { message: false }
    },

    // delete a book
    deleteBook: async (parents: any, args: any, context: Context) => {
      // deleting the book
      const deletedBook = await context.prisma.book.delete({
        where: {
          id: args.bookId
        }
      })

      // return message as true if the book is deleted
      if (deletedBook) return { message: true }

      // return message as false if the book is not deleted
      return { message: false }
    }
  }
}
