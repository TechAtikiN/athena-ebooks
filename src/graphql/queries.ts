// named imports
import { gql } from '@apollo/client'

// Get user details
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
      bookPdf
    }
  }
}
`

// Get all books
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
    createdAt
    bookPdf
  }
}
`

// Get book details
export const GET_BOOK = gql`
  query Book($bookId: ID!) {
    book(id: $bookId) {
      id
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
  query Query {
  books {
    category
  }
}
`

// Get books by category
export const GET_BOOKS_BY_QUERY = gql`
  query Query($searchTerm: String!) {
  searchBooks(searchTerm: $searchTerm) {
    author {
      name
    }
    coverImage
    id
    title
  }
}
`

// Get user favorites
export const GET_FAVORITES = gql`
  query Query($userId: ID!) {
  getFavorites(userId: $userId) {
    title
    id
    description
    coverImage
    createdAt
  }
}
`

// check if book is favorite
export const CHECK_FAVORITE = gql`
  query Query($userId: ID!, $bookId: ID!) {
  isFavoriteBook(userId: $userId, bookId: $bookId) {
    message
  }
}
`