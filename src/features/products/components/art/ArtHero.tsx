'use client'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

const images = Array.from({ length: 5 }, (_, i) => (
  `/art/${i + 1}.jpg`
))

export default function ArtHero() {
  return (
    <div className="relative flex flex-col items-center">
      <Link href="/products/art" className="absolute right-4 top-[66px] flex flex-col items-center gap-4">
        <div className="grid size-20 place-content-center rounded-full border-2 border-white">
          <ArrowRight size={40} />
        </div>
        พื้นที่ซื้อขาย
      </Link>
      <h1 className="mb-1.5 font-math text-[64px]">
        SONG-PHRA
      </h1>
      <h2 className="mb-6 flex items-center gap-3 text-[2rem] font-bold">
        <DecorativeSymbolIcon size={20} variant="1" />
        พุ ท ธ ศิ ล ป์
        <DecorativeSymbolIcon size={20} variant="1" />
      </h2>
      <p className="mb-[60px] text-center">
        “ ความงาม และ ความศรัทธา ”
        <br />
        <br />
        ‘ พุทธศิลป์ ’ สะท้อนถึงความศรัทธา แต่ยังสร้างความประทับใจและคุณค่าในเชิงศิลปะ
        <br />
        ร่วมเป็นเจ้าของชิ้นงานพุทธศิลป์ที่มีความเป็นเอกลักษณ์ และสัมผัสกับประสบการณ์การสะสมผลงานที่ไม่เหมือนใคร
      </p>
      <Swiper
        className="w-full"
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 500,
          depth: 500,
        }}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        slidesPerView="auto"
        grabCursor
        navigation={{
          prevEl: '.hero-arrow-prev',
          nextEl: '.hero-arrow-next',
        }}
        centeredSlides
        loop
      >
        {images.map(image => (
          <SwiperSlide key={image} className="!h-auto !w-auto overflow-hidden rounded-[40px]">
            <div className="h-[494px] w-[832px]">
              <Image width={832} height={494} src={image} alt="" />
            </div>
          </SwiperSlide>
        ))}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button className="hero-arrow-prev rounded-full" variant="outline" size="icon">
            <ArrowLeft />
          </Button>
          <div className="hero-pagination !w-auto" />
          <Button className="hero-arrow-next rounded-full" variant="outline" size="icon">
            <ArrowRight />
          </Button>
        </div>
      </Swiper>
    </div>
  )
}
