'use client'

import {
  Hourglass,
  Trash,
  UserIcon,
} from 'lucide-react'
import Image from 'next/image'

import AuctionIcon from '@/components/icons/AuctionIcon'
import UserRoleIcon from '@/components/icons/UserRoleIcon'
import VerifiedIcon from '@/components/icons/VerifiedIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

import type { Auction } from '../../types/auction'
import AuctionStatusBadge from './AuctionStatusBadge'

interface MyAuctionCardProps {
  auction: Auction
  isSelected: boolean
  isPending?: boolean
  onSelect: (auctionId: number) => void
  onUnselect?: (auctionId: number) => void
}

export default function MyAuctionCard({ auction, isSelected, onSelect, isPending, onUnselect }: MyAuctionCardProps) {
  const currentUserId = 1 // TODO: Replace with actual user id

  const handleClick = () => {
    if (isPending) {
      return
    }

    onSelect(auction.id)
  }

  return (
    <Card
      onClick={handleClick}
      key={auction.id}
      className="cursor-pointer overflow-hidden rounded-[20px] text-base transition-[transform,box-shadow] hover:scale-105 hover:shadow-[0_0_16px] hover:shadow-primary"
    >
      <CardHeader className="relative h-[250px] p-0">
        <Image
          src={auction.image}
          width={214}
          height={250}
          className="size-full object-cover"
          alt={auction.name}
        />
        <div className="absolute left-2 top-2 flex flex-col gap-2">
          {!isPending && (
            <Checkbox
              checked={isSelected}
              className="size-7 rounded-full border-2 border-white data-[state=checked]:border-primary"
            />
          )}
          <AuctionStatusBadge
            startDateTime={auction.startDateTime}
            endDateTime={auction.endDateTime}
          />
        </div>
        {auction.isVerified && <VerifiedIcon className="absolute right-2 top-2" />}
        <Badge
          variant="white"
          className="absolute bottom-2 left-2 rounded-full"
        >
          <UserIcon size={20} className="mr-1" />
          {auction.bidderCount}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-1 p-2">
        <Badge
          variant="light"
          className={cn(
            'gap-2 rounded px-1',
            auction.bidderUserId === currentUserId && 'bg-[#323E47] text-white hover:bg-[#323E47]/80',
          )}
        >
          <AuctionIcon size={18} />
          <span>
            <b>{formatNumber(auction.price)}</b>
            {' '}
            บาท
          </span>
        </Badge>
        <b className="line-clamp-2">
          {auction.name}
        </b>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {auction.author.displayName}
          <UserRoleIcon width={12} height={12} userRoleId={auction.author.id} />
        </div>
      </CardContent>
      <CardFooter className={cn('p-2 pt-0', isPending && 'flex gap-2')}>
        <Button
          onClick={e => e.stopPropagation()}
          className="w-full rounded-xl"
          variant="secondary"
          asChild
        >
          <Link href={`/products/auction/${auction.id}/edit`}>
            ต่อเวลาการประมูล
            <Hourglass />
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
              onUnselect(auction.id)
            }}
          >
            <Trash size={20} />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
