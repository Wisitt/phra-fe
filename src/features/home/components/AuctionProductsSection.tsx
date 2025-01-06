'use client'

import { useState } from 'react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import AuctionProductCard from './AuctionProductCard'

export default function AuctionProductsSection() {
  const [tab, setTab] = useState(0)
  const [focusedIndex, setFocusedIndex] = useState(0)

  const tabs = ['นิยม', 'ล่าสุด']

  const products = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    image: `/hero/buddha-${i % 5 + 1}.png`,
    username: 'username',
    userRoleId: 1,
    name: 'พระนางพญาหลังปั้ม',
    modelName: 'ชื่อรุ่น',
    type: 'พระพุทธรูป',
    material: 'เหล็ก',
    codeNumber: '123456',
    createdYear: 2564,
    temple: 'วัดจิตภาวัน',
    province: 'ชลบุรี',
    isVerified: Math.random() > 0.5,
    bidderCount: Math.floor(Math.random() * 13),
    price: 3000,
  }))

  return (
    <section className="container mb-8">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <DecorativeSymbolIcon variant="3" className="text-primary" />
          ประมูล
          <DecorativeSymbolIcon variant="3" className="text-primary" />
        </h2>
        <div className="flex gap-2 rounded-full bg-wood-smoke-950 p-1">
          {tabs.map((item, index) => (
            <Button
              key={item}
              variant={tab === index ? 'default' : 'ghost'}
              onClick={() => setTab(index)}
              className={cn(
                'w-[126px] rounded-full',
                tab === index
                  ? 'border text-center px-2 justify-between border-primary bg-gradient-to-br from-primary-300/80 to-primary-100/80 font-bold text-white'
                  : ' !text-white/50 hover:bg-transparent',
              )}
            >
              <DecorativeSymbolIcon
                className={cn('size-3 text-martini-950', tab !== index && 'invisible')}
                variant="1"
              />
              {item}
              <DecorativeSymbolIcon
                className={cn('size-3 text-martini-950', tab !== index && 'invisible')}
                variant="1"
              />
            </Button>
          ))}
        </div>
      </div>
      <div className="grid h-[400px] grid-cols-6 gap-4">
        {products.map((product, index) => (
          <AuctionProductCard key={product.id} product={product} isFocused={focusedIndex === index} onFocus={() => setFocusedIndex(index)} />
        ))}
      </div>
    </section>
  )
}
