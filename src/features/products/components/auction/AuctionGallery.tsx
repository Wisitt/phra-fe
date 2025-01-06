'use client'

import 'swiper/css'
import 'swiper/css/navigation'

import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, HeartIcon, HourglassIcon, MessageCircleMoreIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import AnnouncementIcon from '@/components/icons/AnnouncementIcon'
import AuctionIcon from '@/components/icons/AuctionIcon'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { formatLongDate, formatLongDateTime } from '@/utils/formatter'

import AuctionStatusBadge from './AuctionStatusBadge'

const images = [
  '/example/1.jpg',
  '/example/2.jpg',
  '/example/3.jpg',
  '/example/4.jpg',
]

interface AuctionGalleryProps {
  startDateTime: Date
  endDateTime: Date
}

export default function AuctionGallery({ startDateTime, endDateTime }: AuctionGalleryProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const view = 20
  const date = new Date()
  const biddingPeople = 16

  return (
    <>
      <div className="container mb-[36px] mt-9 grid grid-cols-12 items-start gap-4 text-white">
        <div className="col-span-2 col-start-2 grid grid-cols-[auto_1fr] items-center gap-x-2 gap-y-3 ">
          <EyeIcon size={32} />
          {view}
          <AnnouncementIcon size={32} />
          {formatLongDate(date)}
          <AuctionIcon size={32} />
          {biddingPeople}
        </div>
        <div className="relative col-span-6 aspect-square">
          <Image
            className="rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.9)]"
            src={images[currentSlide]}
            fill
            sizes="100%"
            alt=""
          />
          <svg
            className="absolute left-5 top-5"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              fill="#297591"
              stroke="#297591"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 3.22c.359-.69.538-1.035.778-1.147a.78.78 0 01.66 0c.24.112.42.457.777 1.147l2.36 4.543c.155.298.233.446.349.545a.78.78 0 00.357.172c.15.03.314-.003.643-.068l5.024-.987c.762-.15 1.144-.225 1.381-.107a.78.78 0 01.412.516c.062.258-.096.613-.412 1.323l-2.08 4.678c-.137.306-.205.46-.21.612a.78.78 0 00.088.387c.071.135.199.243.454.46l3.905 3.312c.592.503.889.754.945 1.013a.78.78 0 01-.147.644c-.163.209-.54.307-1.291.503l-4.955 1.29c-.324.084-.486.127-.609.217a.78.78 0 00-.247.31c-.062.14-.067.308-.077.643l-.155 5.117c-.024.777-.036 1.166-.203 1.37a.78.78 0 01-.595.287c-.265.003-.576-.23-1.198-.696l-4.098-3.069c-.268-.2-.402-.301-.55-.34a.78.78 0 00-.396 0c-.148.039-.282.14-.55.34l-4.098 3.07c-.622.465-.933.698-1.198.695a.78.78 0 01-.595-.286c-.167-.205-.18-.594-.203-1.37l-.155-5.118c-.01-.335-.015-.503-.077-.642a.78.78 0 00-.247-.31c-.122-.091-.285-.134-.61-.218l-4.954-1.29c-.752-.196-1.128-.294-1.29-.503a.78.78 0 01-.147-.644c.055-.259.352-.51.944-1.013l3.905-3.312c.255-.217.383-.325.454-.46a.78.78 0 00.088-.387c-.005-.152-.073-.306-.21-.612L5.12 9.157c-.316-.71-.474-1.065-.412-1.323a.78.78 0 01.412-.516c.237-.118.618-.043 1.381.107l5.024.987c.329.065.493.097.643.068a.78.78 0 00.357-.172c.116-.099.194-.247.348-.545l2.36-4.543z"
            >
            </path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 13l-6.875 6.667L11 16.637"
            >
            </path>
          </svg>
          <div className="absolute bottom-5 right-5 space-x-2">
            <Button
              size="icon"
              className="rounded-full"
            >
              <MessageCircleMoreIcon size={20} />
            </Button>
            <Button
              onClick={() => setIsLiked(!isLiked)}
              size="icon"
              className="rounded-full"
            >
              <HeartIcon
                className={cn(isLiked && 'fill-white')}
                size={20}
              />
            </Button>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-end gap-2">
          <AuctionStatusBadge compact={false} variant="light" className="max-w-full text-base [--muted:240_5%_39%]" startDateTime={startDateTime} endDateTime={endDateTime} />
          <div className="flex items-center gap-2">
            <HourglassIcon size={32} />
            {formatLongDateTime(startDateTime)}
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
        slidesPerView="auto"
        centeredSlides
        className="h-[266px]"
        spaceBetween={16}
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={image}
            className={cn(
              '!w-auto h-full aspect-square rounded-2xl overflow-hidden',
              i === currentSlide && 'border-[3px] border-primary',
            )}
          >
            <Image src={image} fill alt="" />
          </SwiperSlide>
        ))}
        <CustomNavigation currentSlide={currentSlide} totalSlides={images.length} />
      </Swiper>
    </>
  )
}

function CustomNavigation({
  currentSlide,
  totalSlides,
}: {
  currentSlide: number
  totalSlides: number
}) {
  const swiper = useSwiper()

  return (
    <>
      <Button
        disabled={currentSlide === 0}
        size="icon"
        variant="secondary"
        className="absolute left-[240px] top-1/2 z-10 size-[90px] -translate-y-1/2 rounded-full"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon size={64} />
      </Button>
      <Button
        disabled={currentSlide === totalSlides - 1}
        size="icon"
        variant="secondary"
        className="absolute right-[240px] top-1/2 z-10 size-[90px] -translate-y-1/2 rounded-full"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon size={64} />
      </Button>
    </>
  )
}
