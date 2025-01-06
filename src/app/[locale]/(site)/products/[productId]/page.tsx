import { ChevronLeft } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import ProductGallery from '@/features/products/components/ProductGallery'
import ProductInfo from '@/features/products/components/ProductInfo'
import ProductInfoBanner from '@/features/products/components/ProductInfoBanner'
import ProductNavbar from '@/features/products/components/ProductNavbar'
import ProfileBanner from '@/features/products/components/profile-banner/ProfileBanner'
import { Link } from '@/i18n/routing'

interface ProductProps {
  params: {
    productId: string
  }
}

export default async function Product({ params }: ProductProps) {
  const productId = Number(params.productId)

  return (
    <div className="overflow-hidden bg-wood-smoke-950">
      <div
        style={{
          backgroundImage: `url(/bg.png),linear-gradient(to bottom,var(--tw-gradient-stops))`,
        }}
        className="relative from-[#1E272E] via-[#161618]/10 to-[#161618]/0 bg-cover bg-center bg-no-repeat pb-[36px]"
      >
        <ProductNavbar productId={productId} />
        <div className="container flex items-center gap-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-white transition-colors hover:text-white/80">
            <ChevronLeft />
            ย้อนกลับ
          </Link>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white hover:text-white/80" href="/products">
                  เช่า/ปล่อยพระ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white hover:text-white/80" href="/products?category_id=7">
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
        <ProductGallery />
      </div>
      <ProductInfoBanner />
      <div className="container grid grid-cols-12 gap-4 pb-10 pt-8">
        <div className="col-span-10 col-start-2 grid grid-cols-subgrid space-y-8">
          <ProductInfo />
          <ProfileBanner />
        </div>
      </div>
    </div>
  )
}
