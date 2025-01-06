import type { Author } from '@/types/api'

export interface Product {
  id: number
  image: string
  isVerified: boolean
  isRented?: boolean
  author: Author
  name: string
  price: number
  productTypeId: number
}

export interface Auction {
  id: number
  image: string
  isVerified: boolean
  author: Author
  name: string
  price: number
  startDateTime: Date
  endDateTime: Date
  bidderCount: number
  minShortCutPrice: number | null
  bidderUserId: number | null
}

export interface AuctionProductType {
  id: number
  name: string
  amount: number
}

export interface PopularAuctionProductType {
  id: number
  image: string
  name: string
}

export interface RandomAuction {
  id: number
  name: string
  hashtags: string[]
  description: string
  price: number
  images: string[]
}
