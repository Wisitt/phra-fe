'use client'

import { ArrowRight, HeartIcon, MessageCircleMoreIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { dayjs } from '@/lib/dayjs'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface Product {
  id: number
  image: string
  username: string
  userRoleId: number
  name: string
  maxSupply: number
  reserveDueDate: Date
  price: number
}

interface ArtProductCardProps {
  product: Product
  isFocused: boolean
  onFocus: () => void
}

export default function ArtProductCard({ product, isFocused, onFocus }: ArtProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card
      onMouseEnter={onFocus}
      className={cn(
        'relative overflow-hidden rounded-[var(--outer-border-radius)] border-none bg-black transition-[grid-column] duration-300',
        '[--inner-border-radius:1rem] [--outer-border-radius:36px]',
        isFocused && 'col-span-2',
      )}
    >
      <CardContent className="flex h-full gap-4 p-[--inner-border-radius]">
        <Image
          src={product.image}
          width={214}
          height={250}
          className="h-full flex-1 object-contain"
          alt={product.name}
        />
        <div
          className={cn(
            'flex flex-1 flex-col rounded-[calc(var(--outer-border-radius)-var(--inner-border-radius))] bg-white/20 p-2 text-white transition-opacity duration-300',
            !isFocused && 'hidden',
          )}
        >
          <div className="mb-[27px] flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs">
              {product.username}
              <UserRoleIcon width={12} height={12} userRoleId={product.userRoleId} />
            </div>
            <div className="space-x-1">
              <Button variant="white" size="iconSm" className="rounded-full">
                <MessageCircleMoreIcon size={20} />
              </Button>
              <Button
                variant="white"
                size="iconSm"
                className="rounded-full"
                onClick={() => setIsLiked(prev => !prev)}
              >
                <HeartIcon
                  className={cn('fill-transparent', isLiked && 'fill-primary stroke-primary')}
                  size={20}
                />
              </Button>
            </div>
          </div>
          <b className="mb-8">{product.name}</b>
          <p>
            จำนวนสินค้าทั้งหมด
            {' '}
            <b>{product.maxSupply}</b>
          </p>
          <p>
            ปิดจองสินค้า
            {' '}
            <b>{dayjs(product.reserveDueDate).format('D MMM BBBB')}</b>
          </p>
          <button type="button" className="mt-auto flex w-full items-center rounded-full bg-wood-smoke-950">
            {product.price > 0
              ? (
                  <p className="w-full">
                    <b>{formatNumber(product.price)}</b>
                    {' '}
                    บาท
                  </p>
                )
              : (
                  <p className="w-full">ไม่ระบุ</p>
                )}
            <div className="size-10 rounded-full bg-primary">
              <ArrowRight size={40} />
            </div>
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
