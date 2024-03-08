import { gql } from '@apollo/client'

// Add user to database 
export const ADD_USER = `
  mutation AddUser($name: String!, $email: String!, $image: String) {
    addUser(name: $name, email: $email, image: $image) {
      createdAt
      email
      id
      image
      name
    }
  }
`

// Add book to database
export const ADD_BOOK = gql`
mutation AddBook($title: String!, $description: String!, $bookPdf: String!, $authorId: ID!, $category: String, $coverImage: String) {
  addBook(title: $title, description: $description, bookPdf: $bookPdf, authorId: $authorId, category: $category, coverImage: $coverImage) {
    id
  }
}`

// set favorite book in database
export const ADD_FAVORITE = gql`
  mutation Mutation($userId: ID!, $bookId: ID!) {
  addFavoriteBook(userId: $userId, bookId: $bookId) {
    message
  }
}
`

// Update user details in database
export const UPDATE_USER = gql`
mutation UpdateUser($authorDescription: String, $location: String, $authorId: String) {
  updateUser(authorDescription: $authorDescription, location: $location, authorId: $authorId) {
    description
    email
    id
    location
    name
  }
}`

export const UPDATE_BOOK = gql`
mutation Mutation(
  $bookId: ID!,
  $title: String,
  $description: String,
  $category: String,
  $coverImage: String,
  $bookPdf: String) {
  updateBook(
    bookId: $bookId,
    title: $title,
    description: $description,
    category: $category,
    coverImage: $coverImage,
    bookPdf: $bookPdf
  ) {
    message
  }
}
`
