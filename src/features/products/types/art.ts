import type { Author } from '@/types/api'

export interface Art {
  id: number
  image: string
  isVerified: boolean
  name: string
  ownedAmount: number
  maxSupply: number
  reserveDueDate: Date | null
  price: number
  author: Author
  productTypeId: number
}
