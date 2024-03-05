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
  category: string
  description: string
  author: {
    name: string
    id: number
  }
}

type TFile = {
  key: string
  name: string
  url: string
}
