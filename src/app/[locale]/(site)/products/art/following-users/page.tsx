'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import NavigationBar from '@/components/shared/NavigationBar'
import ServerPagination from '@/components/shared/ServerPagination'
import ArtCard from '@/features/products/components/art/ArtCard'
import ArtNavbar from '@/features/products/components/art/ArtNavbar'

const mockFollowingUsersData = [
  {
    id: 11,
    image: '/art/5.jpg',
    name: 'พระเครื่องรุ่นพิเศษ',
    ownedAmount: 30,
    maxSupply: 30,
    price: 2500,
    reserveDueDate: null,
    username: 'วัดพระแก้ว',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 12,
    image: '/art/4.jpg',
    name: 'เหรียญหลวงพ่อรุ่นแรก',
    ownedAmount: 25,
    maxSupply: 25,
    price: 3500,
    reserveDueDate: null,
    username: 'วัดอรุณ',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 13,
    image: '/art/3.jpg',
    name: 'พระกริ่งโบราณ',
    ownedAmount: 15,
    maxSupply: 15,
    price: 4800,
    reserveDueDate: null,
    username: 'วัดสุทัศน์',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 14,
    image: '/art/2.jpg',
    name: 'พระสมเด็จวัดระฆัง',
    ownedAmount: 40,
    maxSupply: 40,
    price: 1800,
    reserveDueDate: null,
    username: 'วัดระฆัง',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 16,
    image: '/art/5.jpg',
    name: 'พระกริ่งมหามงคล รุ่นพิเศษ',
    ownedAmount: 0,
    maxSupply: 50,
    price: 8500,
    reserveDueDate: new Date('2024-12-15T15:20:22+07:00'),
    username: 'วัดบางนา',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 17,
    image: '/art/4.jpg',
    name: 'เหรียญรุ่นแรก หลวงพ่อทวด',
    ownedAmount: 0,
    maxSupply: 100,
    price: 5500,
    reserveDueDate: new Date('2024-12-20T15:20:22+07:00'),
    username: 'วัดช้างให้',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 18,
    image: '/art/3.jpg',
    name: 'พระสมเด็จ รุ่นมหาบารมี',
    ownedAmount: 0,
    maxSupply: 200,
    price: 3500,
    reserveDueDate: new Date('2024-12-18T15:20:22+07:00'),
    username: 'วัดบางขุนพรหม',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 19,
    image: '/art/2.jpg',
    name: 'เหรียญเจริญพร รุ่นแรก',
    ownedAmount: 0,
    maxSupply: 150,
    price: 4500,
    reserveDueDate: new Date('2024-12-25T15:20:22+07:00'),
    username: 'วัดสุทัศน์',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 20,
    image: '/art/1.jpg',
    name: 'พระปิดตา รุ่นเศรษฐี',
    ownedAmount: 0,
    maxSupply: 80,
    price: 6500,
    reserveDueDate: new Date('2024-12-30T15:20:22+07:00'),
    username: 'วัดประยุรวงศ์',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 21,
    image: '/art/5.jpg',
    name: 'พระกริ่งมหามงคล รุ่นพิเศษ',
    ownedAmount: 0,
    maxSupply: 50,
    price: 8500,
    reserveDueDate: new Date('2024-12-15T15:20:22+07:00'),
    username: 'วัดบางนา',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 22,
    image: '/art/4.jpg',
    name: 'เหรียญรุ่นแรก หลวงพ่อทวด',
    ownedAmount: 0,
    maxSupply: 100,
    price: 5500,
    reserveDueDate: new Date('2024-12-20T15:20:22+07:00'),
    username: 'วัดช้างให้',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 23,
    image: '/art/3.jpg',
    name: 'พระสมเด็จ รุ่นมหาบารมี',
    ownedAmount: 0,
    maxSupply: 200,
    price: 3500,
    reserveDueDate: new Date('2024-12-18T15:20:22+07:00'),
    username: 'วัดบางขุนพรหม',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 24,
    image: '/art/2.jpg',
    name: 'เหรียญเจริญพร รุ่นแรก',
    ownedAmount: 0,
    maxSupply: 150,
    price: 4500,
    reserveDueDate: new Date('2024-12-25T15:20:22+07:00'),
    username: 'วัดสุทัศน์',
    userRoleId: 2,
    productType: 2,
  },
  {
    id: 25,
    image: '/art/1.jpg',
    name: 'พระปิดตา รุ่นเศรษฐี',
    ownedAmount: 0,
    maxSupply: 80,
    price: 6500,
    reserveDueDate: new Date('2024-12-30T15:20:22+07:00'),
    username: 'วัดประยุรวงศ์',
    userRoleId: 2,
    productType: 2,
  },
]

export default function FollowingUsers() {
  return (
    <>
      <ArtNavbar />
      <div className="container pb-10">
        <NavigationBar
          returnHref="/products/art"
          items={[
            {
              href: '/products/art',
              label: 'พุทธศิลป์',
            },
            {
              label: 'บุคคลที่ติดตาม',
            },
          ]}
        />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-[1/-1] xl:col-[2/-2]">
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <DecorativeSymbolIcon size={20} variant="3" />
                บุคคลที่ติดตาม
                <DecorativeSymbolIcon size={20} variant="3" />
              </h2>
              <div className="mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {mockFollowingUsersData.map(art => (
                  // eslint-disable-next-line ts/ban-ts-comment
                  // @ts-ignore
                  <ArtCard key={art.id} art={art} />
                ))}
              </div>
              <ServerPagination page={1} total={59} />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
