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