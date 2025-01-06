import type {
  PopularProductType,
  Product,
  ProductType,
  RandomProduct,
} from '@/features/products/types/product'
import type { PaginationResponse } from '@/types/api'

export async function getProducts(
  searchParams: string,
): Promise<PaginationResponse<Product>> {
  return {
    total: 20,
    items: Array.from({ length: 16 }).map((_, i) => ({
      id: i + 1,
      image: 'https://placehold.jp/214x250.png',
      isVerified: true,
      author: {
        id: 1,
        displayName: 'Name',
        roleId: 1,
      },
      name: 'ชื่อพระ ชื่อรุ่น รูปแบบ เนื้อ เลขโค้ด ปีผลิต ชื่อวัด จังหวัด',
      price: 1000,
      productTypeId: 1,
    })),
  }
}

export async function getFollowedUserProducts(): Promise<Product[]> {
  return Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    image: 'https://placehold.jp/214x250.png',
    isVerified: true,
    author: {
      id: 1,
      displayName: 'Name',
      roleId: 1,
    },
    name: 'ชื่อพระ ชื่อรุ่น รูปแบบ เนื้อ เลขโค้ด ปีผลิต ชื่อวัด จังหวัด',
    price: 1000,
    productTypeId: 1,
  }))
}

export async function getPaginatedFollowedUserProducts(
  searchParams: string,
): Promise<PaginationResponse<Product>> {
  return {
    total: 20,
    items: Array.from({ length: 16 }).map((_, i) => ({
      id: i + 1,
      image: 'https://placehold.jp/214x250.png',
      isVerified: true,
      author: {
        id: 1,
        displayName: 'Name',
        roleId: 1,
      },
      name: 'ชื่อพระ ชื่อรุ่น รูปแบบ เนื้อ เลขโค้ด ปีผลิต ชื่อวัด จังหวัด',
      price: 1000,
      productTypeId: 1,
    })),
  }
}

export async function getProductTypes(): Promise<ProductType[]> {
  return [
    { id: 1, name: 'พระพุทธรูปบูชา', amount: 2000 },
    { id: 2, name: 'พระกริ่งพระชัยวัฒน์ยอดนิยม', amount: 2000 },
    { id: 3, name: 'พระรูปหล่อเหรียญหล่อยอดนิยม', amount: 2000 },
    { id: 4, name: 'เหรียญยอดนิยม', amount: 2000 },
    { id: 5, name: 'พระกริ่งพระชัยวัฒน์ทั่วไป', amount: 2000 },
    { id: 6, name: 'พระรูปหล่อเหรียญหล่อทั่วไป', amount: 2000 },
    { id: 7, name: 'เหรียญทั่วไป', amount: 2000 },
    { id: 8, name: 'พระชุดเบญจภาคี', amount: 2000 },
    { id: 9, name: 'พระเนื้อดิน ยอดนิยม', amount: 2000 },
    { id: 10, name: 'พระเนื้อชิน ยอดนิยม', amount: 2000 },
    { id: 11, name: 'พระปิดตา ยอดนิยม', amount: 2000 },
    { id: 12, name: 'เหรียญกษาปณ์ ยอดนิยม', amount: 2000 },
    { id: 13, name: 'พระชัยวัฒน์ ยอดนิยม', amount: 2000 },
    { id: 14, name: 'พระกริ่ง ยอดนิยม', amount: 2000 },
    { id: 15, name: 'เหรียญหล่อ ยอดนิยม', amount: 2000 },
    { id: 16, name: 'เหรียญคณาจารย์ ยอดนิยม', amount: 2000 },
    { id: 17, name: 'เหรียญพระพุทธ ยอดนิยม', amount: 2000 },
    { id: 18, name: 'พระรูปหล่อ ยอดนิยม', amount: 2000 },
    { id: 19, name: 'อื่นๆ', amount: 2000 },
  ]
}

export async function getRandomProduct(): Promise<RandomProduct> {
  return {
    id: 1,
    name: 'พระปิดตาหลวงปู่เอี่ยม วัดหนัง พิมพ์นะหัวเข่าสองหน้า เนื้อสำริด',
    hashtags: ['hashtag 1', 'hashtag 2', 'hashtag 3'],
    description:
      'เป็นพระเครื่องที่ได้รับความนิยม หวงแหน และใฝ่หามาบูชากันมาก ด้วยเชื่อว่าพระปิดตา มีพุทธคุณ ครบถ้วน ทั้งแคล้วคลาด ปลอดภัย และพุทธคุณทางเมตตา ค้าขาย โชคลาภ     พระภาวนาโกศล หรือ หลวงปู่เอี่ยม สุวณฺณสโร หรือ เจ้าคุณเฒ่า อดีตเจ้าอาวาสวัดหนัง พระเกจิผู้โด่งดังมากในสมัยรัชกาลที่ 5 ท่านสร้างวัตถุมงคลและเครื่องรางของขลังมากมาย ซึ่งมีชื่อเสียงและพุทธคุณเป็นที่ปรากฏ เป็นที่ใฝ่หากันมาตั้งแต่อดีต ที่เป็นสุดยอดอย่างหนึ่ง คือ “พระปิดตา”',
    price: 8800,
    images: [
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
    ],
  }
}

export async function getPopularProductTypes(): Promise<PopularProductType[]> {
  return Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    image: '/pop-search.jpg',
    name: i % 2 === 0 ? 'เหรียญ' : 'พระพุทธรูป',
  }))
}
