'use client'

import 'swiper/css'
import 'swiper/css/zoom'

import Image from 'next/image'
import { Autoplay, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import magnifyImage from '../../../../public/hero/magnify.png'

export default function HeroSlider() {
  return (
    <div className="container pointer-events-none relative pt-[91px]">
      <Swiper
        modules={[Autoplay, Zoom]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={40}
        slidesPerView="auto"
        loop
        centeredSlides
        zoom={{
          maxRatio: 3.5,
          toggle: false,
        }}
        onInit={swiper => swiper.zoom.in()}
        onSlideChangeTransitionEnd={swiper => swiper.zoom.in()}
        breakpoints={{
          0: {
            slidesOffsetBefore: 25,
          },
          768: {
            slidesOffsetBefore: 85,
          },
          1024: {
            slidesOffsetBefore: 215,
          },
          1280: {
            slidesOffsetBefore: 345,
          },
          1535: {
            slidesOffsetBefore: 456,
          },
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <SwiperSlide key={i} className="!h-[314px] !w-[220px] [&.swiper-slide-zoomed>*]:[clip-path:circle(80%_at_center)] [&>*]:[clip-path:circle(100%_at_center)]">
            <div className="swiper-zoom-container">
              <Image src={`/hero/buddha-${(i % 5) + 1}.png`} alt="" height={314} width={220} className="h-full object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-0 top-0 z-10">
        <Image src={magnifyImage} width={550} alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-[#161618]/0 via-[37%] to-wood-smoke-950 to-[62%]" />
      </div>
    </div>
  )
}
