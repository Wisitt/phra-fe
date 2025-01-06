'use client'

import { EditIcon, Trash } from 'lucide-react'
import Image from 'next/image'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import VerifiedIcon from '@/components/icons/VerifiedIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import type { Product } from '@/features/products/types/product'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface MyProductCardProps {
  product: Product
  isDisabled?: boolean
  isSelected?: boolean
  isPending?: boolean
  onSelect?: (productId: number) => void
  onUnselect?: (productId: number) => void
}

export default function MyProductCard({ product, isDisabled, isSelected, onSelect, isPending, onUnselect }: MyProductCardProps) {
  const handleClick = () => {
    if (isPending) {
      return
    }
    onSelect(product.id)
  }

  return (
    <Card
      onClick={handleClick}
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
        {!isPending && (
          <Checkbox
            checked={isSelected}
            className="absolute left-2 top-2 size-7 rounded-full border-2 border-white data-[state=checked]:border-primary"
          />
        )}
        {product.isVerified && <VerifiedIcon className="absolute right-2 top-2" />}
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
        {product.price > 0
          ? (
              <p>
                <b>{formatNumber(product.price)}</b>
                {' '}
                บาท
              </p>
            )
          : (
              <span className="text-muted-foreground">ไม่ระบุ</span>
            )}
      </CardContent>
      <CardFooter className={cn('p-2 pt-0', isPending && 'flex gap-2')}>
        <Button
          disabled={isDisabled}
          className="w-full rounded-xl"
          variant="secondary"
          asChild
          onClick={e => e.stopPropagation()}
        >
          <Link href={`/products/${product.id}/edit`}>
            แก้ไข
            <EditIcon size={20} />
          </Link>
        </Button>
        {isPending && (
          <Button
            disabled={isDisabled}
            className="shrink-0 rounded-xl"
            variant="destructive"
            size="icon"
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onUnselect(product.id)
            }}
          >
            <Trash size={20} />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
