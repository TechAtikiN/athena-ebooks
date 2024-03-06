type Navlink = {
  name: string
  href: string
}

type Book = {
  id: number
  title: string
  coverImage: string
  category: string
  description?: string
  author?: {
    name: string
  }
}

type BookDetails = {
  id: number
  title: string
  coverImage: string
  bookPdf: string
  category: string
  description: string
  createdAt: string
  author: {
    id: string
    name: string
    email: string
    description: string
    location: string
  }
}

type TFile = {
  key: string
  name: string
  url: string
}

type User = {
  books: Book[]
  email: string
  id: string
  name: string
  image: string
  createdAt: string
  description: string
  location: string
}