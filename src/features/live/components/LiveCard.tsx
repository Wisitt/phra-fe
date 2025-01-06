import { Heart, Users } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import type { Live } from '../types/live'

interface LiveCardProps {
  live: Live
}

export default function LiveCard({ live }: LiveCardProps) {
  const t = useTranslations('Common')

  return (
    <Card className="overflow-hidden" key={live.id}>
      <CardHeader className="relative h-[230px]">
        <Image src={live.thumbnail} fill alt={`${live.name} thumbnail`} />
        <Badge className="absolute left-2 top-2 z-10 h-7 gap-1 rounded-full py-1 text-xs font-bold" variant="secondaryInverted">
          <div className="relative grid aspect-square h-full place-content-center after:absolute after:size-full after:animate-ripple after:rounded-full after:bg-destructive/15">
            <div className="size-2 rounded-full bg-destructive" />
          </div>
          {t('Live.live')}
        </Badge>
        <Badge className="absolute bottom-2 left-2 z-10 h-7 gap-1 rounded-full py-1 text-xs font-bold" variant="secondaryInverted">
          <Users size={20} />
          {live.viewers}
        </Badge>
        <Button
          size="iconXss"
          className="absolute bottom-2 right-2 z-10 rounded-full bg-white text-black hover:bg-white/90"
        >
          <Heart size={20} />
        </Button>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
          <span>
            {live.firstName}
            {' '}
            {live.lastName}
          </span>
          <UserRoleIcon width={12} height={12} userRoleId={1} />
        </div>
        <CardTitle className="line-clamp-2 text-base font-bold">
          {live.name}
        </CardTitle>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-1">
        {live.hashtags.map(hashtag => (
          <Badge key={hashtag} variant="outline" className="rounded-full">
            {hashtag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
