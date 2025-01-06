export interface Article {
  id: number
  name: string
}

export interface Category {
  id: number
  name: string
  articles: Article[]
}

export interface Group {
  id: string
  name: string
  categories: Category[]
}

export interface HelpRouteParams {
  groupId: string
  id: string
}
