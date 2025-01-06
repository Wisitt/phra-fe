'use client'

import { MessageCircleMoreIcon, PhoneCallIcon, UserCheckIcon, UserPlusIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import UserRoleIcon from '@/components/icons/UserRoleIcon'
import { StarRating } from '@/components/shared/StarRating'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'

export default function ProfileInfo() {
  const [activeLesseeId, setActiveLesseeId] = useState('')

  const isFollowed = false
  const name = 'Nic Nic'
  const roleId = 1
  const rating = 4.5

  const lessees = [
    {
      id: '1',
      name: 'ธ',
    },
    {
      id: '2',
      name: 'ณ',
    },
    {
      id: '3',
      name: 'ว',
    },
    {
      id: '4',
      name: 'ศ',
    },
    {
      id: '5',
      name: 'ส',
    },
    {
      id: '6',
      name: 'บ',
    },
  ]

  const lesseeInfo = {
    id: '1',
    firstName: 'Nicas',
    lastName: 'Kammor',
    roleId: 1,
    rating: 4.5,
    isFollowed: false,
    images: Array.from({ length: 1 }, () => 'https://placehold.jp/40x40.png'),
  }

  return (
    <div className="col-span-full grid grid-cols-subgrid">
      <div className="relative col-span-full h-[300px]">
        <Image
          alt=""
          className="object-cover"
          fill
          src="https://images.unsplash.com/photo-1485811055483-1c09e64d4576?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="col-[2/-2] mb-8 grid grid-cols-[auto_repeat(7,minmax(0,1fr))] gap-4 pt-4">
        <div className="mt-[calc(-70.5px-1rem)] flex flex-col items-center gap-5">
          <div className="relative size-[141px]">
            <Image
              alt=""
              fill
              className="rounded-full object-cover"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="flex items-center gap-3">
            <PhoneCallIcon />
            089-4523854
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="mb-1 flex items-center gap-2 text-2xl font-bold">
            {name}
            <UserRoleIcon userRoleId={roleId} />
          </h2>
          <div className="mb-4 flex items-center gap-2">
            {rating.toFixed(1)}
            <StarRating rating={rating} />
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="xss"
              variant="outline-secondary"
              className={cn('w-[125px] rounded px-2', isFollowed && 'bg-white text-black')}
            >
              <span className="mx-auto">{isFollowed ? 'กำลังติดตาม' : 'ติดตาม'}</span>
              {isFollowed ? <UserCheckIcon size={20} /> : <UserPlusIcon size={20} />}
            </Button>
            <Button
              size="xss"
              variant="outline-secondary"
              className="w-[125px] rounded px-2"
            >
              <span className="mx-auto">ส่งข้อความ</span>
              <MessageCircleMoreIcon size={20} />
            </Button>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-subgrid flex-col">
          <div className="text-center">
            <span className="mb-2 inline-block text-[2rem] font-bold leading-none">9</span>
            <p>ครอบครอง</p>
          </div>
          <div className="text-center">
            <span className="mb-2 inline-block text-[2rem] font-bold leading-none">8</span>
            <p>รับเช่า</p>
          </div>
          <div className="text-center">
            <span className="mb-2 inline-block text-[2rem] font-bold leading-none">13</span>
            <p>ปล่อยเช่า</p>
          </div>
          <div className="text-center">
            <span className="mb-2 inline-block text-[2rem] font-bold leading-none">1</span>
            <p>จอง</p>
          </div>
        </div>
        <div className="col-span-3 col-start-2 grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
          ผู้ติดตาม:
          <span>
            {1}
          </span>
          กำลังติดตาม:
          <span>
            {2}
          </span>
          เข้าร่วมเมื่อ:
          <span>
            {3}
          </span>
        </div>
        <div className="col-span-2 grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
          การตั้งปล่อยเช่า :
          <span>
            {1}
          </span>
          การเปิดประมูล :
          <span>
            {2}
          </span>
          การไลฟ์สด :
          <span>
            {3}
          </span>
        </div>
        <div className="col-span-2 grid gap-y-2">
          ผู้รับเช่า :
          <div className="flex [&>*:nth-child(n+2)]:-ml-2">
            {lessees.map(({ id, name }) => (
              <HoverCard
                key={id}
                open={activeLesseeId === id}
                onOpenChange={open => setActiveLesseeId(open ? id : '')}
              >
                <HoverCardTrigger>
                  <Avatar>
                    <AvatarFallback className={cn(
                      'border border-transparent bg-martini-900 text-lg font-bold text-white hover:z-10 hover:border-martini-950 hover:bg-background hover:text-martini-950',
                      activeLesseeId === id && 'bg-background border-martini-950 text-martini-950 z-10',
                    )}
                    >
                      {name}
                    </AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback className={cn(
                        'border border-transparent bg-martini-900 text-lg font-bold text-white',
                      )}
                      >
                        {name}
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="contents font-bold">
                      {lesseeInfo.firstName}
                      {' '}
                      {lesseeInfo.lastName}
                      <UserRoleIcon userRoleId={roleId} />
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <p>จำนวนการเช่า: 4</p>
                    <p>ผู้ติดตาม: 2</p>
                  </div>
                  <Carousel>
                    <CarouselContent className="-ml-1">
                      {lesseeInfo.images.map((image, i) => (
                        <CarouselItem className="basis-1/4 pl-1" key={image + i}>
                          <div className="relative aspect-square overflow-hidden rounded-lg">
                            <Image
                              alt=""
                              fill
                              src={image}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {
                      lesseeInfo.images.length > 4 && (
                        <>
                          <CarouselPrevious className="left-1" />
                          <CarouselNext className="right-1" />
                        </>
                      )
                    }
                  </Carousel>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
