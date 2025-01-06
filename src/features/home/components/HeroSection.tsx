'use client'

import { EllipsisVerticalIcon, HelpCircleIcon, MailIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { Button } from '@/components/ui/button'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Link } from '@/i18n/routing'
import { formatNumber } from '@/utils/formatter'

import HeroSlider from './HeroSlider'

const chartData = [
  { month: 'พ.ค.', sales: 125000 },
  { month: 'มิ.ย.', sales: 185000 },
  { month: 'ก.ค.', sales: 145000 },
  { month: 'ส.ค.', sales: 210000 },
]
const chartConfig = {
  sales: {
    label: 'ยอดขาย',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export default function HeroSection() {
  const t = useTranslations('Common')

  return (
    <section className="overflow-hidden bg-wood-smoke-950">
      <HeroSlider />
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="p-4 text-white">
            <h1 className="mb-2 px-8 py-2 font-math text-6xl">
              SONG-PHRA
            </h1>
            <div className="mb-2 flex items-center opacity-30">
              <DecorativeSymbolIcon variant="4" className="shrink-0" />
              <div className="h-0.5 w-full rounded bg-white" />
              <DecorativeSymbolIcon variant="4" className="shrink-0" />
              <div className="h-0.5 w-full rounded bg-white" />
              <DecorativeSymbolIcon variant="4" className="shrink-0" />
            </div>
            <div className="px-8">
              <h2 className="mb-4 text-[2rem] font-bold">ส่ อ ง พ ร ะ</h2>
              <p className="indent-8">
                “ ชุมชนพระเครื่องที่ใหญ่ที่สุด ที่มอบความมั่นใจด้วยระบบการซื้อขายที่ปลอดภัย โปร่งใส ละเชื่อถือได้ทั้งการประมูล
                และไลฟ์สด พร้อมการรับรองจากเซียนพระผู้เชี่ยวชาญ ”
              </p>
              <br />
              <p className="mb-[60px] indent-8">
                แพลตฟอร์มที่รวมผู้เชี่ยวชาญและคนรักพระเครื่องไม่ว่าคุณจะเป็นผู้สะสมพระเครื่องมือใหม่หรือนักสะสม
                ระดับเซียน ‘ ส่องพระ ’ มอบประสบการณ์การซื้อขาย ประมูลที่สะดวก ปลอดภัยและเชื่อถือได้พร้อมด้วยการตรวจสอบ
                ผู้ซื้อผู้ขายที่เข้มงวดและการรับรองจากเซียนพระผู้เชี่ยวชาญเพื่อให้คุณมั่นใจในทุกขั้นตอนของการซื้อขาย
              </p>
            </div>
            <div className="flex justify-end gap-4">
              <Button size="lg" variant="outline-white" className="w-[160px] rounded-full" asChild>
                <Link href="/login">{t('login')}</Link>
              </Button>
              <Button size="lg" variant="light" asChild className="w-[160px] rounded-full">
                <Link href="/register">{t('register')}</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between">
            <div className="group mt-7 flex max-h-12 flex-col gap-4 overflow-hidden rounded-full bg-primary-100 transition-all hover:max-h-full">
              <Button size="iconLg" variant="lighter" className="shrink-0 cursor-default rounded-full">
                <EllipsisVerticalIcon className="transition-transform group-hover:rotate-90" />
              </Button>
              <Button size="iconLg" variant="lighter" asChild>
                <Link href="/contact">
                  <MailIcon />
                </Link>
              </Button>
              <Button size="iconLg" variant="lighter" className="rounded-full" asChild>
                <Link href="/help">
                  <HelpCircleIcon />
                </Link>
              </Button>
            </div>
            <div className="z-10 w-full p-4">
              <div className="w-full rounded-3xl bg-white/30 p-2">
                <div className="flex h-[160px] gap-2">
                  <div className="flex size-full flex-col rounded-2xl bg-[#161618]/60 p-2 pb-0 pr-0">
                    <h2 className="text-xs font-bold text-white">ยอดขายรวม</h2>
                    <ChartContainer className="aspect-auto size-full [&_.recharts-cartesian-axis-tick_text]:fill-white" config={chartConfig}>
                      <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{ top: 16, right: 32, left: 0, bottom: 8 }}
                      >
                        <CartesianGrid vertical={false} strokeDasharray="4" strokeWidth={1.2} />
                        <XAxis
                          dataKey="month"
                          tickMargin={8}
                        />
                        <YAxis
                          tickFormatter={value => Intl.NumberFormat('en', { notation: 'compact' }).format(value)}
                          tickMargin={8}
                          tickCount={4}
                        />
                        <ChartTooltip
                          content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <defs>
                          <linearGradient id="color" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#D9C4AE"></stop>
                            <stop offset="100%" stopColor="#4AADC6"></stop>
                          </linearGradient>
                        </defs>
                        <Area
                          dataKey="sales"
                          type="linear"
                          fill="url(#color)"
                          fillOpacity={0.5}
                          stroke="url(#color)"
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                  <div className="flex aspect-square h-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#161618]/60 p-2">
                    <span className="text-[2rem] font-bold text-white">{formatNumber(30154)}</span>
                    <span className="text-xs font-bold text-white/50">จำนวนสินค้าทั้งหมด</span>
                  </div>
                  <div className="flex aspect-square h-full flex-col items-center justify-center gap-4 rounded-2xl bg-[#161618]/60 p-2">
                    <span className="text-[2rem] font-bold text-white">{formatNumber(12215)}</span>
                    <span className="text-xs font-bold text-white/50">จำนวนผู้ใช้งาน</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
