import type { Auction, AuctionProductType, PopularAuctionProductType, RandomAuction } from '@/features/products/types/auction'
import type { PaginationResponse } from '@/types/api'

export async function getPreviewFollowedAuctions(): Promise<Auction[]> {
  return generateMockAuctions(4)
}

export async function getPaginatedFollowedAuctions(searchParams: string): Promise<PaginationResponse<Auction>> {
  return {
    total: 20,
    items: generateMockAuctions(16),
  }
}

export async function getPaginatedAuctions(
  searchParams: string,
): Promise<PaginationResponse<Auction>> {
  return {
    total: 20,
    items: generateMockAuctions(16),
  }
}

export async function getAuctionProductTypes(): Promise<AuctionProductType[]> {
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

export async function getRandomAuction(): Promise<RandomAuction> {
  return {
    id: 1,
    name: 'พระปิดตาหลวงปู่เอี่ยม วัดหนัง พิมพ์นะหัวเข่าสองหน้า เนื้อสำริด',
    hashtags: ['hashtag 1', 'hashtag 2', 'hashtag 3'],
    description:
      'เป็นพระเครื่องที่ได้รับความนิยม หวงแหน และใฝ่หามาบูชากันมาก ด้วยเชื่อว่าพระปิดตา มีพุทธคุณ ครบถ้วน ทั้งแคล้วคลาด ปลอดภัย และพุทธคุณทางเมตตา ค้าขาย โชคลาภ     พระภาวนาโกศล หรือ หลวงปู่เอี่ยม สุวณฺณสโร หรือ เจ้าคุณเฒ่า อดีตเจ้าอาวาสวัดหนัง พระเกจิผู้โด่งดังมากในสมัยรัชกาลที่ 5 ท่านสร้างวัตถุมงคลและเครื่องรางของขลังมากมาย ซึ่งมีชื่อเสียงและพุทธคุณเป็นที่ปรากฏ เป็นที่ใฝ่หากันมาตั้งแต่อดีต ที่เป็นสุดยอดอย่างหนึ่ง คือ "พระปิดตา"',
    price: 8800,
    images: [
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
    ],
  }
}

export async function getPopularAuctionProductTypes(): Promise<PopularAuctionProductType[]> {
  return Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    image: '/pop-search.jpg',
    name: i % 2 === 0 ? 'เหรียญ' : 'พระพุทธรูป',
  }))
}

function generateMockAuctions(count: number): Auction[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    image: `/example/${(i % 4) + 1}.jpg`,
    isVerified: true,
    author: {
      id: 1,
      displayName: 'Name',
      roleId: 1,
    },
    name: 'ชื่อพระ ชื่อรุ่น รูปแบบ เนื้อ เลขโค้ด ปีผลิต ชื่อวัด จังหวัด',
    price: 3000,
    startDateTime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
    ),
    endDateTime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 2,
      new Date().getHours(),
    ),
    bidderCount: Math.floor(Math.random() * 13),
    minShortCutPrice: i % 2 === 0 ? 200 : null,
    bidderUserId: Math.floor(Math.random() * 3),
  }))
}

export function getAuctionInfo(auctionId: number) {
  return Promise.resolve({
    images: [
      {
        src: 'https://placehold.jp/400x400.png',
        alt: 'image 1',
        width: 400,
        height: 400,

      },
      {
        src: 'https://placehold.jp/400x400.png',
        alt: 'image 2',
        width: 400,
        height: 400,
      },
      {
        src: 'https://placehold.jp/400x400.png',
        alt: 'image 3',
        width: 400,
        height: 400,
      },
      {
        src: 'https://placehold.jp/400x400.png',
        alt: 'image 4',
        width: 400,
        height: 400,
      },
      {
        src: 'https://placehold.jp/400x400.png',
        alt: 'image 5',
        width: 400,
        height: 400,
      },
    ],
    startDateTime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours(),
    ),
    endDateTime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 2,
      new Date().getHours(),
    ),
    currentPrice: 2000,
    minBid: 500,
    name: 'พระนางพญาหลังปั้ม',
    modelName: 'ชื่อรุ่น',
    type: 'พระพุทธรูป',
    material: 'เหล็ก',
    codeNumber: '123456',
    createdYear: 2564,
    temple: 'วัดจิตภาวัน',
    province: 'ชลบุรี',
    district: 'เมือง',
    productType: 'ประเภทวัตถุมงคล',
    owner: 'นิติภูมิ นิลเขตร',
    certificateId: 1,
    masterId: 1,
  })
}
