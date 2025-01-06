import { dayjs } from '@/lib/dayjs'

export function generateMockData() {
  const baseProducts = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    image: 'https://placehold.jp/214x250.png',
    isVerified: true,
    isRented: true,
    author: {
      id: 1,
      displayName: 'Name',
      roleId: 1,
    },
    name: 'ชื่อพระ ชื่อรุ่น รูปแบบ เนื้อ เลขโค้ด ปีผลิต ชื่อวัด จังหวัด',
    price: 1000,
    productTypeId: 1,
  }))

  const auctions = Array.from({ length: 4 }).map((_, i) => ({
    id: i + baseProducts.length + 1,
    image: `/example/${(i % 4) + 1}.jpg`,
    isVerified: true,
    author: {
      id: 1,
      displayName: 'Name',
      roleId: 1,
    },
    name: 'ชื่อพระ ชื่อรุ่น รูปแบบ เนื้อ เลขโค้ด ปีผลิต ชื่อวัด จังหวัด',
    price: 3000,
    startDateTime: dayjs().toDate(),
    endDateTime: dayjs().add(5, 'days').toDate(),
    bidderCount: Math.floor(Math.random() * 13),
    minShortCutPrice: i % 2 === 0 ? 200 : null,
    bidderUserId: Math.floor(Math.random() * 3),
    productTypeId: 2,
  }))

  const arts = Array.from({ length: 4 }).map((_, i) => ({
    id: i + baseProducts.length + auctions.length + 1,
    image: 'https://placehold.jp/214x250.png',
    isVerified: true,
    name: 'ภาพวาดศิลปะ',
    ownedAmount: Math.floor(Math.random() * 5) + 1,
    maxSupply: Math.floor(Math.random() * 5) + 5,
    reserveDueDate: (i + 1 + 10) % 2 === 0 ? new Date() : null,
    price: 3000,
    author: {
      id: 1,
      displayName: 'Name',
      roleId: 1,
    },
    productTypeId: 3,
  }))

  return [...baseProducts, ...auctions, ...arts]
}
