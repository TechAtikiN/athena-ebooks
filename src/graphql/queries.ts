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
  }
}
`

// Get book details
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
query Query {
  bookCategories
}
`

// Get books by category
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