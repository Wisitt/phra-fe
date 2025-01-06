export interface ProductSet {
  image: File | null
  name: string
  price: string
  products: { name: string, amount: string }[]
}
