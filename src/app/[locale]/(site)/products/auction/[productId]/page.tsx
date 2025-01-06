import { ChevronLeft } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import AuctionAction from '@/features/products/components/auction/AuctionAction'
import AuctionGallery from '@/features/products/components/auction/AuctionGallery'
import AuctionHistory from '@/features/products/components/auction/AuctionHistory'
import AuctionNavbar from '@/features/products/components/auction/AuctionNavbar'
import AuctionPrice from '@/features/products/components/auction/AuctionPrice'
import AuctionProductInfoBanner from '@/features/products/components/auction/AuctionProductInfoBanner'
import ProductInfo from '@/features/products/components/ProductInfo'
import ProfileBanner from '@/features/products/components/profile-banner/ProfileBanner'
import { Link } from '@/i18n/routing'
import { dayjs } from '@/lib/dayjs'

interface Props {
  params: {
    productId: string
  }
}

export default async function AuctionDetail({ params }: Props) {
  const productId = Number(params.productId)

  const isAuthenticated = true
  const isOwner = false

  const startDateTime = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1,
    new Date().getHours(),
  )
  const endDateTime = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 2,
    new Date().getHours(),
  )
  const isStarted = dayjs().isSameOrAfter(startDateTime)
  const isOpening = dayjs().isSameOrAfter(startDateTime) && dayjs().isSameOrBefore(endDateTime)
  const isEnded = dayjs().isAfter(endDateTime)

  const openPrice = 200
  const currentPrice = 0
  const minPrice = 1000
  const minBid = 200

  return (
    <div className="relative z-10 overflow-hidden bg-wood-smoke-950 after:pointer-events-none after:absolute after:top-0 after:-z-10 after:size-full after:bg-gradient-to-br after:from-[#161618]/35 after:to-white/[0.06]">
      <div
        style={{
          backgroundImage: `url(/bg.png),linear-gradient(to bottom,var(--tw-gradient-stops))`,
        }}
        className="relative from-[#1E272E] via-[#161618]/10 to-[#161618]/0 bg-cover bg-center bg-no-repeat pb-[36px]"
      >
        <AuctionNavbar productId={productId} />
        <div className="container flex items-center gap-10">
          <Link href="/auctions" className="inline-flex items-center gap-2 text-white transition-colors hover:text-white/80">
            <ChevronLeft />
            ย้อนกลับ
          </Link>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white hover:text-white/80" href="/auctions">
                  ประมูล
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white hover:text-white/80" href="/auctions?category_id=7">
                  เช่า/เหรียญทั่วไป
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  หลวงปู่ทวด รุ่นรัชกาลที่9 ครองราชย์ 60ปี เนื้อว่าน วัดพะโคะ
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <AuctionGallery startDateTime={startDateTime} endDateTime={endDateTime} />
      </div>
      <AuctionProductInfoBanner isAuthenticated={isAuthenticated} isOwner={isOwner} isEnded={isEnded} currentPrice={currentPrice} minPrice={minPrice} isOpening={isOpening} />
      <div className="container grid grid-cols-12 gap-4 pb-10 pt-8">
        <div className="col-[2/-2] grid grid-cols-subgrid space-y-8">
          <ProductInfo />
          <ProfileBanner />
          <AuctionPrice openPrice={openPrice} currentPrice={currentPrice} minPrice={minPrice} minBid={minBid} />
        </div>
      </div>
      {isStarted && (
        <>
          <div className="bg-gradient-to-b from-primary-100/20 to-[#87817B]/20 pb-8 pt-[46px]">
            <div className="container grid grid-cols-12 gap-4">
              <AuctionHistory />
            </div>
          </div>
          <AuctionAction
            className="flex justify-center py-14"
            isAuthenticated={isAuthenticated}
            isOwner={isOwner}
            isEnded={isEnded}
            isOpening={isOpening}
          />
        </>
      )}
    </div>
  )
}
