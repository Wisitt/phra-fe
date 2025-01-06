'use client'

import {
  Heart,
  MessageCircleMore,
  ShoppingCart,
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
import type { Art } from '@/features/products/types/art'
import { useRouter } from '@/i18n/routing'
import { dayjs } from '@/lib/dayjs'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface ArtCardProps {
  art: Art
}

export default function ArtCard({ art }: ArtCardProps) {
  const router = useRouter()
  const isReservationOpen = Boolean(art.reserveDueDate)

  const navigateToArtDetail = () => {
    router.push(`/products/art/${art.id}`)
  }

  const renderReservationStatusBadge = () => (
    <Badge
      variant="white"
      className={cn(
        'flex h-[30px] absolute left-2 top-2 gap-1 rounded-full p-1 pr-2 text-xs',
        !isReservationOpen && 'pl-2',
      )}
    >
      {isReservationOpen && (
        <div className="relative grid aspect-square h-full place-content-center after:absolute after:size-full after:animate-ripple after:rounded-full after:bg-destructive/15">
          <div className="size-2 rounded-full bg-destructive" />
        </div>
      )}
      {!isReservationOpen ? 'พร้อมส่ง' : 'กำลังเปิดจอง'}
    </Badge>
  )

  const renderActionButtons = () => (
    <div className="absolute bottom-2 right-2 flex gap-1">
      <Button variant="white" size="iconSm" className="rounded-full">
        <Heart size={20} />
      </Button>
      <Button variant="white" size="iconSm" className="rounded-full">
        <MessageCircleMore size={20} />
      </Button>
    </div>
  )

  const renderPriceInfo = () => {
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
      onClick={navigateToArtDetail}
      className="group relative cursor-pointer overflow-hidden rounded-[20px] transition-transform hover:scale-105 hover:shadow-[0_0_16px] hover:shadow-primary"
    >
      <CardHeader className="relative h-full max-h-full min-h-[250px] bg-black p-0 transition-[max-height] group-hover:max-h-[250px]">
        <Image
          width={250}
          height={250}
          src={art.image}
          alt={art.name}
          className="absolute size-full object-contain"
        />
        {renderReservationStatusBadge()}
        {renderActionButtons()}
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
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          {art.author.displayName}
          <UserRoleIcon size={12} userRoleId={art.author.roleId} />
        </div>
      </CardContent>
      <CardFooter className="p-2 pt-0">
        <Button className="w-full rounded-xl" variant="secondary">
          ใส่รถเข็น
          <ShoppingCart size={20} />
        </Button>
      </CardFooter>
    </Card>
  )
}
