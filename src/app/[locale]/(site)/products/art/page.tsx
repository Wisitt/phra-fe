'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { ArrowLeft, ArrowRight, ArrowRightIcon, ChevronRight, Heart, MessageCircleMore, RefreshCw, UserPlus } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { StarRating } from '@/components/shared/StarRating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ArtCard from '@/features/products/components/art/ArtCard'
import ArtNavbar from '@/features/products/components/art/ArtNavbar'
import type { Art } from '@/features/products/types/art'
import { Link } from '@/i18n/routing'
import { formatNumber } from '@/utils/formatter'

const topArtists = [
  {
    id: 1,
    name: 'จอมพล',
    image: '/art/1.jpg',
  },
  {
    id: 2,
    name: 'จอมปก',
    image: '/art/2.jpg',
  },
  {
    id: 3,
    name: 'ปกเมือง',
    image: '/art/3.jpg',
  },
  {
    id: 4,
    name: 'พลวง',
    image: '/art/4.jpg',
  },
  {
    id: 5,
    name: 'กัญญา',
    image: '/art/5.jpg',
  },
]

const mockArtData: Art[] = [
  {
    id: 1,
    image: '/art/1.jpg',
    isVerified: false,
    name: 'ภาพวาดศิลปะ 1',
    ownedAmount: 10,
    maxSupply: 15,
    reserveDueDate: null,
    price: 3000,
    author: {
      id: 1,
      displayName: 'นิติภูมิk',
      roleId: 1,
    },
    productTypeId: 2,
  },
  {
    id: 2,
    image: '/art/2.jpg',
    isVerified: false,
    name: 'ภาพวาดศิลปะ 2',
    ownedAmount: 8,
    maxSupply: 15,
    reserveDueDate: new Date('2024-12-08T14:56:45+07:00'),
    price: 4500,
    author: {
      id: 2,
      displayName: 'ศิลปิน A',
      roleId: 1,
    },
    productTypeId: 2,
  },
  {
    id: 3,
    image: '/art/3.jpg',
    isVerified: false,
    name: 'ภาพวาดศิลปะ 3',
    ownedAmount: 5,
    maxSupply: 10,
    reserveDueDate: null,
    price: 2500,
    author: {
      id: 3,
      displayName: 'ศิลปิน B',
      roleId: 1,
    },
    productTypeId: 2,
  },
  {
    id: 4,
    image: '/art/4.jpg',
    isVerified: false,
    name: 'ภาพวาดศิลปะ 4',
    ownedAmount: 12,
    maxSupply: 20,
    reserveDueDate: new Date('2024-12-08T14:56:45+07:00'),
    price: 5000,
    author: {
      id: 4,
      displayName: 'ศิลปิน C',
      roleId: 1,
    },
    productTypeId: 2,
  },
  {
    id: 5,
    image: '/art/5.jpg',
    isVerified: false,
    name: 'ภาพวาดศิลปะ 5',
    ownedAmount: 3,
    maxSupply: 5,
    reserveDueDate: null,
    price: 6000,
    author: {
      id: 5,
      displayName: 'ศิลปิน D',
      roleId: 1,
    },
    productTypeId: 2,
  },
]

const mockFollowingArtData: Art[] = [
  {
    id: 6,
    image: '/art/2.jpg',
    isVerified: false,
    name: 'พระพุทธรูปปางสมาธิ',
    ownedAmount: 7,
    maxSupply: 10,
    reserveDueDate: null,
    price: 4500,
    author: {
      id: 6,
      displayName: 'พระอาจารย์สมชาย',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 7,
    image: '/art/3.jpg',
    isVerified: false,
    name: 'พระเครื่องรุ่นมงคล',
    ownedAmount: 15,
    maxSupply: 20,
    reserveDueDate: new Date('2024-12-08T15:05:01+07:00'),
    price: 3500,
    author: {
      id: 7,
      displayName: 'หลวงพ่อวัดใต้',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 8,
    image: '/art/4.jpg',
    isVerified: false,
    name: 'ภาพวาดพระพุทธรูป',
    ownedAmount: 4,
    maxSupply: 8,
    reserveDueDate: null,
    price: 5500,
    author: {
      id: 8,
      displayName: 'พระครูวิมล',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 9,
    image: '/art/5.jpg',
    isVerified: false,
    name: 'พระบูชาองค์เล็ก',
    ownedAmount: 9,
    maxSupply: 12,
    reserveDueDate: new Date('2024-12-08T15:05:01+07:00'),
    price: 2800,
    author: {
      id: 9,
      displayName: 'พระอาจารย์ใหญ่',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 10,
    image: '/art/1.jpg',
    isVerified: false,
    name: 'เหรียญพระรุ่นแรก',
    ownedAmount: 20,
    maxSupply: 25,
    reserveDueDate: null,
    price: 6000,
    author: {
      id: 10,
      displayName: 'หลวงพ่อวัดเหนือ',
      roleId: 2,
    },
    productTypeId: 2,
  },
]

const mockReadyToShipArtData: Art[] = [
  {
    id: 11,
    image: '/art/5.jpg',
    isVerified: false,
    name: 'พระเครื่องรุ่นพิเศษ',
    ownedAmount: 30,
    maxSupply: 30,
    reserveDueDate: null,
    price: 2500,
    author: {
      id: 11,
      displayName: 'วัดพระแก้ว',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 12,
    image: '/art/4.jpg',
    isVerified: false,
    name: 'เหรียญหลวงพ่อรุ่นแรก',
    ownedAmount: 25,
    maxSupply: 25,
    reserveDueDate: null,
    price: 3500,
    author: {
      id: 12,
      displayName: 'วัดอรุณ',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 13,
    image: '/art/3.jpg',
    isVerified: false,
    name: 'พระกริ่งโบราณ',
    ownedAmount: 15,
    maxSupply: 15,
    reserveDueDate: null,
    price: 4800,
    author: {
      id: 13,
      displayName: 'วัดสุทัศน์',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 14,
    image: '/art/2.jpg',
    isVerified: false,
    name: 'พระสมเด็จวัดระฆัง',
    ownedAmount: 40,
    maxSupply: 40,
    reserveDueDate: null,
    price: 1800,
    author: {
      id: 14,
      displayName: 'วัดระฆัง',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 15,
    image: '/art/1.jpg',
    isVerified: false,
    name: 'เหรียญพญาเต่าเรือน',
    ownedAmount: 20,
    maxSupply: 20,
    reserveDueDate: null,
    price: 5500,
    author: {
      id: 15,
      displayName: 'วัดหลวง',
      roleId: 2,
    },
    productTypeId: 2,
  },
]

const mockReservingArtData: Art[] = [
  {
    id: 16,
    image: '/art/5.jpg',
    isVerified: false,
    name: 'พระกริ่งมหามงคล รุ่นพิเศษ',
    ownedAmount: 0,
    maxSupply: 50,
    reserveDueDate: new Date('2024-12-15T15:20:22+07:00'),
    price: 8500,
    author: {
      id: 16,
      displayName: 'วัดบางนา',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 17,
    image: '/art/4.jpg',
    isVerified: false,
    name: 'เหรียญรุ่นแรก หลวงพ่อทวด',
    ownedAmount: 0,
    maxSupply: 100,
    reserveDueDate: new Date('2024-12-20T15:20:22+07:00'),
    price: 5500,
    author: {
      id: 17,
      displayName: 'วัดช้างให้',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 18,
    image: '/art/3.jpg',
    isVerified: false,
    name: 'พระสมเด็จ รุ่นมหาบารมี',
    ownedAmount: 0,
    maxSupply: 200,
    reserveDueDate: new Date('2024-12-18T15:20:22+07:00'),
    price: 3500,
    author: {
      id: 18,
      displayName: 'วัดบางขุนพรหม',
      roleId: 2,
    },
    productTypeId: 2,
  },
  {
    id: 19,
    image: '/art/2.jpg',
    isVerified: false,
    name: 'เหรียญเจริญพร รุ่นแรก',
    ownedAmount: 0,
    maxSupply: 150,
    reserveDueDate: new Date('2024-12-25T15:20:22+07:00'),
    price: 4500,
    author: {
      id: 19,
      displayName: 'วัดบางซื่อ',
      roleId: 2,
    },
    productTypeId: 2,
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

const SECTIONS = [
  {
    title: 'ผลงานที่น่าสนใจ',
    data: mockArtData,
  },
  {
    title: 'บุคคลที่ติดตาม',
    href: '/products/art/following-users',
    data: mockFollowingArtData,
  },
  {
    title: 'พร้อมส่ง',
    href: '/products/art/ready-to-ship',
    data: mockReadyToShipArtData,
  },
  {
    title: 'กำลังเปิดจอง',
    href: '/products/art/open-for-booking',
    data: mockReservingArtData,
  },
]

export default function Arts() {
  return (
    <>
      <ArtNavbar />
      <div className="container grid grid-cols-12 gap-4 pb-10 pt-5">
        <Link href="/products/art/preview" className="flex flex-col items-center gap-4">
          <div className="grid size-20 place-content-center rounded-full border-2 border-black">
            <ArrowLeft size={40} />
          </div>
          เริ่มต้น
        </Link>
        <div className="col-span-10 grid grid-cols-subgrid space-y-10">
          <section className="col-span-full grid grid-cols-subgrid">
            <h2 className="col-span-full mb-5 flex items-center gap-2 text-2xl font-bold">
              <DecorativeSymbolIcon size={20} variant="3" />
              ผลงานพร้อมส่งที่น่าสนใจ
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
          <section className="col-span-full space-y-5">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <DecorativeSymbolIcon size={20} variant="3" />
              ศิลปินที่นิยมประจำเดือน
              <DecorativeSymbolIcon size={20} variant="3" />
            </h2>
            <div className="flex h-[200px] gap-4">
              {topArtists.map(artist => (
                <div
                  key={artist.id}
                  style={{
                    backgroundImage: `url(${artist.image})`,
                  }}
                  className="group size-full cursor-pointer overflow-hidden rounded-[20px] bg-black bg-center bg-no-repeat p-2 transition-[border-radius,width] duration-300 hover:w-[200%] hover:rounded-[20px]"
                >
                  <div className="ml-auto grid h-full w-1/2 place-content-center rounded-xl bg-white/10 text-white opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
                    {artist.name}
                    <Button
                      variant="secondaryInverted"
                      className="absolute bottom-3 right-3 size-[28px] rounded-full p-0"
                    >
                      <ArrowRightIcon />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {SECTIONS.map(({ title, href, data }) => (
            <section key={title} className="col-span-full space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  <DecorativeSymbolIcon size={20} variant="3" />
                  {title}
                  <DecorativeSymbolIcon size={20} variant="3" />
                </h2>
                {href && (
                  <Button variant="ghost" asChild>
                    <Link href={href}>
                      ดูทั้งหมด
                      <ChevronRight />
                    </Link>
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-5 gap-4">
                {data.map(art => (
                  <ArtCard key={art.id} art={art} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
