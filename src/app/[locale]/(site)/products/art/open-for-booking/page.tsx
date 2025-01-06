'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { ArrowRight, Heart, MessageCircleMore, RefreshCw, UserPlus } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import UserRoleIcon from '@/components/icons/UserRoleIcon'
import NavigationBar from '@/components/shared/NavigationBar'
import ServerPagination from '@/components/shared/ServerPagination'
import { StarRating } from '@/components/shared/StarRating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ArtCard from '@/features/products/components/art/ArtCard'
import ArtNavbar from '@/features/products/components/art/ArtNavbar'
import { formatNumber } from '@/utils/formatter'

const mockOpenForBookingData = [
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

// Constants
const IMAGES = ['/art/1.jpg', '/art/2.jpg', '/art/3.jpg', '/art/4.jpg', '/art/5.jpg']
const HASHTAGS = ['hashtag 1', 'hashtag 2', 'hashtag 3']
const FEATURED_PRODUCT = {
  name: 'พระพิฆเนศไอยเรศ',
  description: `Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur
    Lorem ipsum, dolor sit amet consectetur`,
  price: 12000,
}

export default function Products() {
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
              label: 'กำลังเปิดจอง',
            },
          ]}
        />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-10 col-start-2 grid grid-cols-subgrid space-y-10">
            <section className="col-span-full grid grid-cols-subgrid">
              <h2 className="col-span-full mb-5 flex items-center gap-2 text-2xl font-bold">
                <DecorativeSymbolIcon size={20} variant="3" />
                ผลงานกำลังเปิดจองที่น่าสนใจ
                <DecorativeSymbolIcon size={20} variant="3" />
              </h2>
              <div className="col-span-7 grid h-[304px] grid-cols-subgrid gap-4 rounded-[40px] bg-wood-smoke-950 p-4 text-white">
                <div className="relative col-span-2">
                  <div className="absolute">
                    <div className="mb-1 h-[60px] w-full transition-[height] hover:h-[280px]">
                      <Image src="/art/1.jpg" className="h-full rounded-[40px] object-cover" width={251} height={280} alt="" />
                    </div>
                    <div className="mb-1 h-[60px] w-full transition-[height] hover:h-[280px]">
                      <Image src="/art/1.jpg" className="h-full rounded-[40px] object-cover" width={251} height={280} alt="" />
                    </div>
                    <div className="h-[60px] w-full transition-[height] hover:h-[280px]">
                      <Image src="/art/1.jpg" className="h-full rounded-[40px] object-cover" width={251} height={280} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-span-5 flex h-full flex-col">
                  <h3 className="mb-[18px] text-2xl font-bold">{FEATURED_PRODUCT.name}</h3>
                  <h4 className="mb-1 font-bold">
                    รายละเอียด
                  </h4>
                  <div className="mb-[18px] flex-1">
                    <p className="line-clamp-3">
                      {FEATURED_PRODUCT.description}
                    </p>
                  </div>
                  <div className="mb-4 text-end">
                    <Button variant="outline-white" size="xs" className="rounded-full text-xs">
                      รายละเอียดเพิ่มเติม
                    </Button>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="lightest" size="iconLg" className="rounded-full">
                        <Heart size={32} className="text-primary" />
                      </Button>
                      <Button variant="lightest" size="iconLg" className="rounded-full">
                        <MessageCircleMore size={32} className="text-primary" />
                      </Button>
                    </div>
                    <div className="flex gap-4">
                      <Badge className="h-12 gap-2 rounded-full px-[27.5px] text-2xl font-bold">
                        {formatNumber(FEATURED_PRODUCT.price)}
                        {' '}
                        บาท
                      </Badge>
                      <Button
                        size="iconLg"
                        className="rounded-full border-2 border-primary bg-primary-50 text-primary hover:bg-primary hover:text-white"
                      >
                        <ArrowRight className="size-7" strokeWidth={4} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Swiper
                pagination={{
                  el: '.popular-products-pagination',
                  clickable: true,
                }}
                autoplay
                modules={[Autoplay, Pagination]}
                spaceBetween={16}
                className="col-span-3 row-span-2 w-full rounded-[40px]"
              >
                {IMAGES.map((image, index) => (
                  <SwiperSlide className="relative" key={image + index}>
                    <Image width={408} height={432} alt="" src={image} className="size-full rounded-[40px] object-cover" />
                  </SwiperSlide>
                ))}
                <div className="popular-products-pagination absolute z-10 text-center" />
              </Swiper>
              <div className="col-span-5 col-start-3 flex justify-between pt-4">
                <div className="space-y-4">
                  <div className="space-x-2">
                    {HASHTAGS.map(hashtag => (
                      <Badge key={hashtag} variant="outline" className="h-9 rounded-full">
                        {hashtag}
                      </Badge>
                    ))}
                  </div>
                  <div className="col-span-2 flex items-center gap-4">
                    <div>
                      <Image
                        className="rounded-full"
                        alt=""
                        width={60}
                        height={60}
                        src="https://placehold.jp/60x60.png"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <h2 className="font-bold">สมชายk</h2>
                        <UserRoleIcon userRoleId={2} />
                        <span>4.0</span>
                        <StarRating rating={4} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Button className="w-[125px] px-1" size="xss" variant="outline-secondary">
                          <span className="flex-1">ติดตาม</span>
                          <UserPlus size={20} />
                        </Button>
                        <Button className="w-[125px] px-1" size="xss" variant="outline-secondary">
                          <span className="flex-1">ส่งข้อความ</span>
                          <MessageCircleMore size={20} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="aspect-square h-full rounded-full" variant="outline-secondary">
                  <RefreshCw size={60} />
                </Button>
              </div>
            </section>
            <section className="col-span-full">
              <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold">
                <DecorativeSymbolIcon size={20} variant="3" />
                กำลังเปิดจอง
                <DecorativeSymbolIcon size={20} variant="3" />
              </h2>
              <div className="grid grid-cols-5 gap-4">
                {mockOpenForBookingData.map(art => (
                             // eslint-disable-next-line ts/ban-ts-comment
                  // @ts-ignore
                  <ArtCard key={art.id} art={art} />
                ))}
              </div>
              <ServerPagination className="mt-10" page={1} total={59} />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
