'use client'

import { ArrowRight, HeartIcon, MessageCircleMoreIcon, UserIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import VerifiedIcon from '@/components/icons/VerifiedIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface Product {
  id: number
  image: string
  username: string
  userRoleId: number
  name: string
  modelName: string
  type: string
  material: string
  codeNumber: string
  createdYear: number
  temple: string
  province: string
  isVerified: boolean
  bidderCount: number
  price: number
}

interface AuctionProductCardProps {
  product: Product
  isFocused: boolean
  onFocus: () => void
}

export default function AuctionProductCard({ product, isFocused, onFocus }: AuctionProductCardProps) {
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
      {product.isVerified && <VerifiedIcon className="absolute left-[22px] top-[22px]" />}
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
          <b>
            {`${product.name} ${product.modelName} ${product.type} ${product.material} ${product.codeNumber} ${product.createdYear} ${product.temple} ${product.province}`}
          </b>
          <div className="mt-auto">
            <Badge
              variant="outlineWhite"
              className="mb-2 rounded-full"
            >
              <UserIcon size={20} />
              {product.bidderCount}
            </Badge>
            <button type="button" className="flex w-full items-center rounded-full bg-wood-smoke-950">
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
        </div>
      </CardContent>
    </Card>
  )
}
