```mermaid
erDiagram
  User {
    String id
    String email
    String name
    String image
    String description
    String location
    DateTime createdAt
    DateTime updatedAt
  }
  Book {
    String id
    String title
    String description
    String category
    String coverImage
    String bookPdf
    DateTime createdAt
    DateTime updatedAt
    String authorId
  }
  Favorite {
    String id
    String userId
    String bookId
  }
  User ||--o{ Book : "author"
  User ||--o{ Favorite : "favorites"
```