import { gql } from "@apollo/client"

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

// Get user details from database
export const GET_USER = gql`
  query User($email: String!) {
  user(email: $email) {
    id
    email
    image
    name
    createdAt
    description
    location
    books {
      coverImage
      createdAt
      description
      id
      title
    }
  }
}
`

// Get all books from database
export const GET_BOOKS = gql`
  query Books {
  books {
    category
    coverImage
    id
    title
    author {
      name
    }
  }
}
`

// Get book details from database
export const GET_BOOK = gql`
query Book($bookId: ID!) {
  book(id: $bookId) {
    authorId
    bookPdf
    category
    coverImage
    createdAt
    description
    title
    author {
      email
      id
      name
      description
    }
  }
}
`