'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { ArrowRight, Heart, MessageCircleMore, RefreshCw, UserPlus } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import AuctionIcon from '@/components/icons/AuctionIcon'
import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { StarRating } from '@/components/shared/StarRating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import type { RandomProduct as TRandomProduct } from '@/features/products/types/product'
import { formatNumber } from '@/utils/formatter'

interface Props {
  randomProduct: TRandomProduct
  auction?: boolean
}

export default function RandomProduct({ randomProduct, auction }: Props) {
  return (
    <section className="grid grid-cols-3 gap-4">
      <Card className="col-span-2 rounded-[40px] border-none bg-wood-smoke-950 px-4 pb-4 pt-5 text-white shadow">
        <CardHeader className="mb-4 p-0">
          <h2 className="mb-2 text-2xl font-bold">{randomProduct.name}</h2>
          <div className="space-x-2">
            {randomProduct.hashtags.map(hashtag => (
              <Badge key={hashtag} variant="outlineInverted" className="rounded-full">
                {hashtag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="mb-4 p-0">
          <h3 className="mb-1 font-bold">รายละเอียด</h3>
          <p>{randomProduct.description}</p>
          <div className="text-end">
            <Button variant="outlineInverted" size="xs" className="mt-4 rounded-full text-xs">
              รายละเอียดเพิ่มเติม
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-0">
          <div className="flex gap-2">
            <Button variant="lightest" size="iconLg" className="rounded-full">
              <Heart className="size-8 text-primary" />
            </Button>
            <Button variant="lightest" size="iconLg" className="rounded-full">
              <MessageCircleMore className="size-8 text-primary" />
            </Button>
          </div>
          <div className="flex gap-4">
            <Badge className="h-12 gap-2 rounded-full px-[27.5px] text-2xl font-bold">
              {auction && <AuctionIcon size={28} />}
              {formatNumber(randomProduct.price)}
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
        </CardFooter>
      </Card>
      <div className="col-span-2 flex items-center gap-4">
        <div>
          <Image
            className="rounded-full"
            alt={randomProduct.name}
            width={60}
            height={60}
            src="https://placehold.jp/60x60.png"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h2 className="font-bold">สมชาย นิลเขตร์</h2>
            <UserRoleIcon userRoleId={2} />
            <span>4.0</span>
            <StarRating rating={4} />
          </div>
          <div className="flex items-center gap-2">
            <Button className="w-[125px]" size="xs" variant="outline-secondary">
              <span className="flex-1">ติดตาม</span>
              <UserPlus className="size-5" />
            </Button>
            <Button className="w-[125px]" size="xs" variant="outline-secondary">
              <span className="flex-1">พูดคุย</span>
              <MessageCircleMore className="size-5" />
            </Button>
          </div>
        </div>
        <Button className="ml-auto size-[60px] rounded-full" variant="outline-secondary">
          <RefreshCw className="size-[30px]" />
        </Button>
      </div>
      <div className="col-start-3 row-span-3 row-start-1">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          className="h-full rounded-[40px] shadow"
        >
          {randomProduct.images.map((image, index) => (
            <SwiperSlide key={image + index}>
              <Image fill alt="" src={image} className="rounded-[40px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
