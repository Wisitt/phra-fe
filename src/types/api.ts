export interface PaginationRequest<T> {
  pagination: {
    page: number
  }
  body: T
}

export interface PaginationResponse<T> {
  total: number
  items: T[]
}

export interface Author {
  id: number
  displayName: string
  roleId: number
}
