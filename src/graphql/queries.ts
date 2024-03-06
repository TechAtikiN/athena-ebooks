// named imports
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

export const CHECK_FAVORITE = gql`
  query Query($userId: ID!, $bookId: ID!) {
  isFavoriteBook(userId: $userId, bookId: $bookId) {
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
  query Books($category: String, $authorId: ID) {
  books(category: $category, authorId: $authorId) {
    author {
      name
      email
      image
    }
    category
    coverImage
    id
    title
    description
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
        location  
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  query Books {
    books {
      category
    }
  }
`

export const GET_CATEGORY_BOOKS = gql`
  query SearchBooks($searchTerm: String!) {
    searchBooks(searchTerm: $searchTerm) {
      title
      id
      coverImage
      author {
        name
      }
    }
  }
`

export const GET_FAVORITES = gql`
  query Query($userId: ID!) {
  getFavorites(userId: $userId) {
    title
    id
    description
    coverImage
  }
}
`