'use client'

import { Heart, MessageCircleMore, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import VerifiedIcon from '@/components/icons/VerifiedIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import type { Product } from '@/features/products/types/product'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface ProductCardProps {
  product: Product
  isDisabled?: boolean
}

export default function ProductCard({ product, isDisabled }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLiked(prev => !prev)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const renderPriceInfo = () => {
    if (product.price > 0) {
      return (
        <p>
          <b>{formatNumber(product.price)}</b>
          {' '}
          บาท
        </p>
      )
    }
    return <span className="text-muted-foreground">ไม่ระบุ</span>
  }

  return (
    <Link href={`/products/${product.id}`}>
      <Card
        key={product.id}
        className="cursor-pointer overflow-hidden rounded-[20px] transition-[transform,box-shadow] hover:scale-105 hover:shadow-[0_0_16px] hover:shadow-primary"
      >
        <CardHeader className="relative h-[250px] p-0">
          <Image
            src={product.image}
            width={214}
            height={250}
            className="size-full object-cover"
            alt={product.name}
          />
          {product.isVerified && <VerifiedIcon className="absolute right-2 top-2" />}
          <div className="absolute bottom-2 right-2 space-x-1">
            <Button
              onClick={handleOpenChat}
              variant="secondaryInverted"
              size="iconSm"
              className="rounded-full"
            >
              <MessageCircleMore size={20} />
            </Button>
            <Button
              onClick={handleToggleLike}
              variant="secondaryInverted"
              size="iconSm"
              className="rounded-full"
            >
              <Heart
                className={cn('fill-transparent', isLiked && 'fill-primary stroke-primary')}
                size={20}
              />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-1 p-2 pb-2.5">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            {product.isRented && 'เช่าจาก '}
            {product.author.displayName}
            <UserRoleIcon width={12} height={12} userRoleId={product.author.roleId} />
          </div>
          <b className="line-clamp-2">
            {product.name}
          </b>
          {renderPriceInfo()}
        </CardContent>
        <CardFooter className="p-2 pt-0">
          <Button
            disabled={isDisabled}
            onClick={handleAddToCart}
            className="w-full rounded-xl"
            variant="secondary"
          >
            ใส่รถเข็น
            <ShoppingCartIcon size={20} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
