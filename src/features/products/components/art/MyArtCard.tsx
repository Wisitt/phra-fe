'use client'

import {
  Edit,
  Trash,
} from 'lucide-react'
import Image from 'next/image'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import type { Art } from '@/features/products/types/art'
import { Link } from '@/i18n/routing'
import { dayjs } from '@/lib/dayjs'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface ArtCardProps {
  art: Art
  isSelected: boolean
  isPending?: boolean
  onSelect: (artId: number) => void
  onUnselect?: (productId: number) => void
}

export default function MyArtCard({ art, isSelected, isPending, onSelect, onUnselect }: ArtCardProps) {
  const isOpenForReserve = Boolean(art.reserveDueDate)

  const handleClick = () => {
    if (isPending) {
      return
    }
    onSelect(art.id)
  }

  const renderReservationBadge = () => (
    <Badge
      variant="white"
      className={cn(
        'flex h-[30px] gap-1 rounded-full p-1 text-xs',
        isOpenForReserve ? 'pr-2' : 'w-[30px]',
      )}
    >
      <div className="relative grid aspect-square h-full place-content-center after:absolute after:size-full after:animate-ripple after:rounded-full after:bg-destructive/15">
        <div className="size-2 rounded-full bg-destructive" />
      </div>
      {isOpenForReserve && 'กำลังเปิดจอง'}
    </Badge>
  )

  const renderPrice = () => {
    if (art.price > 0) {
      return (
        <p>
          <b>{formatNumber(art.price)}</b>
          {' '}
          บาท
        </p>
      )
    }

    return <span className="text-muted-foreground">ไม่ระบุ</span>
  }

  return (
    <Card
      onClick={handleClick}
      className="group cursor-pointer overflow-hidden rounded-[20px] transition-[transform,box-shadow] hover:scale-105 hover:shadow-[0_0_16px] hover:shadow-primary"
    >
      <CardHeader className="relative h-[250px] bg-black p-0">
        <Image
          width={250}
          height={250}
          src={art.image}
          alt={art.name}
          className="absolute size-full object-contain"
        />
        <div className="absolute left-2 top-2 flex flex-col gap-[10px]">
          {!isPending && (
            <Checkbox
              checked={isSelected}
              className="size-7 rounded-full border-2 border-white data-[state=checked]:border-primary"
            />
          )}
          {renderReservationBadge()}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col p-2 text-base">
        <div className="mb-1 font-bold">
          <Badge variant="light" className="mr-2 inline-block rounded">
            <span className="text-destructive">{art.ownedAmount}</span>
            {' / '}
            {art.maxSupply}
          </Badge>
          {art.reserveDueDate && (
            <span className="text-destructive">
              {dayjs(art.reserveDueDate).format('DD MMM BBBB')}
            </span>
          )}
        </div>
        <b className="truncate">
          {art.name}
        </b>
        {renderPrice()}
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          {art.author.displayName}
          <UserRoleIcon size={12} userRoleId={art.author.roleId} />
        </div>
      </CardContent>
      <CardFooter className={cn('p-2 pt-0', isPending && 'flex gap-2')}>
        <Button onClick={e => e.stopPropagation()} asChild className="w-full rounded-xl" variant="secondary">
          <Link href={`/products/art/${art.id}/edit`}>
            แก้ไข
            <Edit size={20} />
          </Link>
        </Button>
        {isPending && (
          <Button
            className="shrink-0 rounded-xl"
            variant="destructive"
            size="icon"
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onUnselect(art.id)
            }}
          >
            <Trash size={20} />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
