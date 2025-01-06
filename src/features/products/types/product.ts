export interface Product {
  id: number
  image: string
  isVerified: boolean
  isRented?: boolean
  author: {
    id: number
    displayName: string
    roleId: number
  }
  name: string
  price: number
  productTypeId: number
}

export interface ProductType {
  id: number
  name: string
  amount: number
}

export interface PopularProductType {
  id: number
  image: string
  name: string
}

export interface RandomProduct {
  id: number
  name: string
  hashtags: string[]
  description: string
  price: number
  images: string[]
}
