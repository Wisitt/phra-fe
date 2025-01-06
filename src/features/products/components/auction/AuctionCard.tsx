'use client'

import {
  BellPlusIcon,
  BellRingIcon,
  CircleCheck,
  HeartIcon,
  MessageCircleMoreIcon,
  PlusIcon,
  UserIcon,
} from 'lucide-react'
import Image from 'next/image'
import { type MouseEvent, useState } from 'react'

import AuctionIcon from '@/components/icons/AuctionIcon'
import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import UserRoleIcon from '@/components/icons/UserRoleIcon'
import VerifiedIcon from '@/components/icons/VerifiedIcon'
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import type { Auction } from '@/features/products/types/auction'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

import AuctionStatusBadge from './AuctionStatusBadge'
import BidDialog from './BidDialog'

interface AuctionCardProps {
  auction: Auction
}

export default function AuctionCard({ auction }: AuctionCardProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isBidConfirmationOpen, setIsBidConfirmationOpen] = useState(false)
  const [isBidSuccessOpen, setIsBidSuccessOpen] = useState(false)

  const currentUserId = 1 // TODO: Replace with actual user id

  const handleChat = (e: MouseEvent) => {
    e.preventDefault()
  }

  const handleLike = (e: MouseEvent) => {
    e.preventDefault()
    setIsLiked(prev => !prev)
  }

  const handleBid = (e: MouseEvent) => {
    e.preventDefault()
    setIsBidConfirmationOpen(true)
  }

  const handleFollow = (e: MouseEvent) => {
    e.preventDefault()
    setIsFollowing(prev => !prev)
  }

  const handleConfirm = () => {
    setIsBidSuccessOpen(true)
  }

  return (
    <Link href={`/products/auction/${auction.id}`}>
      <Card
        key={auction.id}
        className="overflow-hidden rounded-[20px] transition-[transform,box-shadow] hover:z-10 hover:scale-105 hover:shadow-[0_0_16px] hover:shadow-primary"
      >
        <CardHeader className="relative h-[250px] p-0">
          <AuctionStatusBadge
            className="absolute left-2 top-2"
            startDateTime={auction.startDateTime}
            endDateTime={auction.endDateTime}
          />
          <Image
            src={auction.image}
            width={214}
            height={250}
            className="size-full object-cover"
            alt={auction.name}
          />
          {auction.isVerified && <VerifiedIcon className="absolute right-2 top-2" />}
          <Badge
            variant="secondaryInverted"
            className="absolute bottom-2 left-2 rounded-full text-base"
          >
            <UserIcon size={20} className="mr-1" />
            {auction.bidderCount}
          </Badge>
          <div className="absolute bottom-2 right-2 space-x-1">
            <Button
              onClick={handleChat}
              variant="secondaryInverted"
              size="iconSm"
              className="rounded-full"
            >
              <MessageCircleMoreIcon size={20} />
            </Button>
            <Button
              onClick={handleLike}
              variant="secondaryInverted"
              size="iconSm"
              className="rounded-full"
            >
              <HeartIcon
                className={cn('fill-transparent', isLiked && 'fill-primary stroke-primary')}
                size={20}
              />
            </Button>
          </div>
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
        <CardFooter className="p-2 pt-0">
          <ButtonGroup>
            <Button
              size="sm"
              className="w-1/2 rounded-xl p-1"
              onClick={handleBid}
              variant="secondary"
            >
              <PlusIcon size={16} />
              {auction.minShortCutPrice ?? 'ร่วมประมูล'}
            </Button>
            <div role="presentation" onClick={e => e.preventDefault()}>
              <BidDialog
                isOpen={isBidConfirmationOpen}
                setIsOpen={setIsBidConfirmationOpen}
                onConfirm={handleConfirm}
                auctionId={auction.id}
              />
              <AlertDialog open={isBidSuccessOpen} onOpenChange={setIsBidSuccessOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader className="items-center space-y-0">
                    <CircleCheck className="mb-4 text-[#37B97C]" size={56} />
                    <AlertDialogTitle className="!mb-2 text-2xl text-foreground">
                      การเสนอราคาสำเร็จในราคา
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-4">
                      <b className="flex items-center justify-center gap-2 text-2xl">
                        <DecorativeSymbolIcon variant="1" />
                        {`${formatNumber(1200)} บาท`}
                        <DecorativeSymbolIcon variant="1" />
                      </b>
                      {auction.name}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction className="w-[120px]">
                      ยืนยัน
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <Button
              size="sm"
              className="w-1/2 gap-0 rounded-xl p-1"
              onClick={handleFollow}
              variant="secondary"
            >
              <span className="mx-auto">{isFollowing ? 'กำลังติดตาม' : 'ติดตาม'}</span>
              {isFollowing ? <BellRingIcon size={20} /> : <BellPlusIcon size={20} />}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Link>
  )
}
