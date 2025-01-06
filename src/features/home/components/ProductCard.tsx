'use client'

import { ArrowRight, HeartIcon, MessageCircleMoreIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import VerifiedIcon from '@/components/icons/VerifiedIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Product } from '@/features/products/types/product'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface ProductCardProps {
  product: Product
  isFocused: boolean
  onFocus: () => void
}

export default function ProductCard({ product, isFocused, onFocus }: ProductCardProps) {
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
              {product.author.displayName}
              <UserRoleIcon width={12} height={12} userRoleId={product.author.id} />
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
          <b className="line-clamp-2">
            {product.name}
          </b>
          <div className="mt-auto flex items-center rounded-full bg-wood-smoke-950 text-center">
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
            <Button asChild className="rounded-full" size="icon">
              <Link href={`/products/${product.id}`}>
                <ArrowRight size={40} />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
