'use client'

import 'swiper/css'
import 'swiper/css/navigation'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
  images: string[]
  currentSlide: number
}

export default function ProductImageSlider({ images, currentSlide }: Props) {
  return (
    <Swiper
      modules={[Navigation]}
      // onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
      slidesPerView="auto"
      centeredSlides
    >
      {images.map((image, i) => (
        <SwiperSlide
          key={image + i}
          style={{
            width: 214,
            height: 214,
          }}
          className={cn(
            'overflow-hidden rounded-2xl mr-4',
            i === currentSlide && 'border-[3px] border-primary',
          )}
        >
          <Image sizes="100%" src={image} fill alt="" />
        </SwiperSlide>
      ))}
      <CustomNavigation currentSlide={currentSlide} totalSlides={images.length} />
    </Swiper>
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
