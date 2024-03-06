// typedefs for documenting schema, queries and mutations
export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    description: String!
    category: String!
    coverImage: String!
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
    description: String
    location: String
  }

  type Query {
    book(id: ID!): Book
    books(category: String, authorId: ID): [Book]
    user(email: String!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, image: String): User
    addBook(
      title: String!,
      description: String!,
      category: String,
      coverImage: String,
      bookPdf: String!,
      authorId: ID!
    ): Book
    updateUser(authorDescription: String, location: String, authorId: String): User
  }
`