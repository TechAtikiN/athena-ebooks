type Navlink = {
  name: string
  href: string
}

type Book = {
  id: number
  name: string
  author: string
  tag: string
}

type BookDetails = {
  id: number
  title: string
  category: string
  description: string
  author: {
    name: string
    id: number
  }
}