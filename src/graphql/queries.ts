import { gql } from "@apollo/client"

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

export const GET_USER = gql`
  query User($email: String!) {
  user(email: $email) {
    id
    email
    image
    name
    createdAt
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

export const ADD_BOOK = gql`
mutation AddBook($title: String!, $description: String!, $bookPdf: String!, $authorId: ID!, $category: String, $coverImage: String, $authorDescription: String) {
  addBook(title: $title, description: $description, bookPdf: $bookPdf, authorId: $authorId, category: $category, coverImage: $coverImage, authorDescription: $authorDescription) {
    id
  }
}`