type Navlink = {
  name: string
  href: string
}

type Book = {
  id: number
  title: string
  coverImage: string
  category: string
  author: {
    name: string
  }
}

type BookDetails = {
  id: number
  title: string
  coverImage: string
  bookPdf: string
  authorDescription: string
  category: string
  description: string
  createdAt: string
  author: {
    id: string
    name: string
    email: string
  }
}

type TFile = {
  key: string
  name: string
  url: string
}
