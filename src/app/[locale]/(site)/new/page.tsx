import { ChevronRight } from 'lucide-react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import NavigationBar from '@/components/shared/NavigationBar'
import { Button } from '@/components/ui/button'
import AuctionIcon from '@/features/products/components/icons/AuctionIcon'
import BuddhistArtIcon from '@/features/products/components/icons/BuddhistArtIcon'
import LiveIcon from '@/features/products/components/icons/LiveIcon'
import OccupyIcon from '@/features/products/components/icons/OccupyIcon'
import RentReleaseIcon from '@/features/products/components/icons/RentReleaseIcon'
import ProductCategoryCard from '@/features/products/components/ProductCategoryCard'

interface NewProps {
  searchParams: {
    returnUrl: string
  }
}

export default function New(props: NewProps) {
  const { searchParams } = props

  const productCategories = [
    {
      title: 'ครอบครอง',
      description: 'สินค้าที่อยู่ในการครอบครองของท่าน',
      icon: <OccupyIcon />,
      href: '/products/new',
    },
    {
      title: 'เช่า/ปล่อยพระ',
      description: 'การปล่อยเช่าให้ผู้ต้องการบูชาท่านอื่นซึ่งท่านสามารถกำหนดราคาที่พอใจได้',
      icon: <RentReleaseIcon />,
      href: '/products/rent-sell/new',
    },
    {
      title: 'ประมูล',
      description: 'ตั้งราคาเริ่มต้น ราคาประมูลขั้นต่ำต่อครั้ง และระยะเวลาปิดประมูลที่กำหนด ผู้ที่ให้ราคาสูงสุดจะได้สิทธิ์ในการซื้อสินค้า',
      icon: <AuctionIcon />,
      href: '/products/auction/new',
    },
    {
      title: 'พุทธศิลป์',
      description: 'การปล่อยเช่าพุทธศิลป์ที่พร้อมส่ง หรือ กำลังเปิดจอง',
      icon: <BuddhistArtIcon />,
      href: '/products/art/new',
    },
    {
      title: 'ไลฟ์สด',
      description: 'พื้นที่ถ่ายทอดสดออนไลน์ เพื่อสื่อสารกับผู้ที่ต้องการเช่าต่อโดยตรง',
      icon: <LiveIcon />,
      href: '/live/new',
    },
  ]

  return (
    <div className="container pb-[60px]">
      <NavigationBar
        returnHref={searchParams.returnUrl}
        items={[
          {
            label: 'เพิ่มสินค้าใหม่',
          },
        ]}
      />
      <h2 className="mb-5 flex items-center justify-center gap-2 text-2xl font-bold">
        <DecorativeSymbolIcon variant="1" />
        รูปแบบการลงสินค้า
        <DecorativeSymbolIcon variant="1" />
      </h2>
      <p className="mb-[60px] text-center">กรุณาเลือกรูปแบบการลงสินค้าที่ท่านต้องการ</p>
      <div className="mb-[84px] grid grid-cols-12 gap-4">
        <div className="col-[2/-2] grid grid-cols-5 gap-4 text-center">
          {productCategories.map(productCategory => (
            <ProductCategoryCard
              key={productCategory.title}
              title={productCategory.title}
              description={productCategory.description}
              icon={productCategory.icon}
              href={productCategory.href}
            />
          ),
          )}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Button variant="ghost" size="xs">
          ข้อกำหนดเรื่องค่าธรรมเนียมและการลงขายต่างๆ
          <ChevronRight size={20} />
        </Button>
        <Button variant="ghost" size="xs">
          คำแนะนำในการลงสินค้าและรูปภาพ
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  )
}
