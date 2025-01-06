'use client'

import { useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { Button } from '@/components/ui/button'
import type { ChartConfig } from '@/components/ui/chart'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

const options = [
  { id: 1, label: 'รวม' },
  { id: 2, label: '1' },
  { id: 3, label: '2' },
  { id: 4, label: '3' },
  { id: 5, label: '4' },
  { id: 6, label: '5' },
]

const chartData = [
  { type1: 100000, type2: 200000, type3: 304000, type4: 404000, type5: 300000, date: '30 ส.ค.' },
  { type1: 120000, type2: 220000, type3: 302000, type4: 500000, type5: 530000, date: '31 ส.ค.' },
  { type1: 140000, type2: 240000, type3: 300400, type4: 406000, type5: 100000, date: '1 ม.ย.' },
  { type1: 160000, type2: 260000, type3: 100000, type4: 400060, type5: 502000, date: '2 ม.ย.' },
  { type1: 180000, type2: 230000, type3: 320000, type4: 400000, type5: 520000, date: '3 ม.ย.' },
  { type1: 200000, type2: 250000, type3: 300400, type4: 406000, type5: 505000, date: '4 ม.ย.' },
]
const chartConfig = {
  type1: {
    label: 'ประเภทที่ 1',
    color: '#B58763',
  },
  type2: {
    label: 'ประเภทที่ 2',
    color: '#F60855',
  },
  type3: {
    label: 'ประเภทที่ 3',
    color: '#4AADC6',
  },
  type4: {
    label: 'ประเภทที่ 4',
    color: '#38BA7C',
  },
  type5: {
    label: 'ประเภทที่ 5',
    color: '#297591',
  },
} satisfies ChartConfig

export default function TopProductTypesChartSection() {
  const [selectedOption, setSelectedOption] = useState(1)

  return (
    <section className="container pb-[88px] pt-[84px]">
      <div className="relative grid h-[664px] grid-cols-[auto_minmax(0,2fr)_minmax(0,1fr)] gap-4 overflow-hidden rounded-[4rem] border-2 border-white bg-gradient-to-br from-[#FFFFFF]/[calc(0.4*0.3)] to-[#FFFFFF]/[calc(0.1*0.3)] p-8">
        <div className="flex flex-col gap-4">
          {options.map(option => (
            <div key={option.id} className="flex items-center gap-4">
              <div className={cn('size-4 rounded-full invisible bg-white', selectedOption === option.id && 'visible')} />
              <Button
                variant="outline-white"
                className={cn(
                  'size-[60px] rounded-full border-2 bg-gradient-to-br from-white/40 to-white/[0.1] text-2xl font-bold transition-all',
                  selectedOption !== option.id && 'opacity-40',
                )}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.label}
              </Button>
            </div>
          ))}
        </div>
        <div className="rounded-[30px] border bg-[#161618]/60 pt-6">
          <h2 className="mb-5 flex items-center justify-center gap-2 text-2xl font-bold text-white">
            <DecorativeSymbolIcon variant="5" />
            กราฟแสดงมูลค่าสินค้ารวมประเภทขายดี 5 อันดับ
            <DecorativeSymbolIcon variant="5" />
          </h2>
          <ChartContainer className="[&_.recharts-cartesian-axis-tick_text]:fill-white" config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{ top: 16, right: 32, left: 32, bottom: 8 }}
            >
              <Line
                dataKey="type1"
                type="monotone"
                stroke="var(--color-type1)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="type2"
                type="monotone"
                stroke="var(--color-type2)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="type3"
                type="monotone"
                stroke="var(--color-type3)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="type4"
                type="monotone"
                stroke="var(--color-type4)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="type5"
                type="monotone"
                stroke="var(--color-type5)"
                strokeWidth={2}
                dot={false}
              />
              <CartesianGrid vertical={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={11}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <ChartLegend content={<ChartLegendContent className="text-white" />} />
            </LineChart>
          </ChartContainer>
        </div>
        <div className="rounded-[30px] border bg-[#161618]/60 px-4 pt-6">
          <h2 className="mb-5 flex items-center justify-center gap-2 text-2xl font-bold text-white">
            <DecorativeSymbolIcon variant="5" />
            ข้อมูลประเภทสินค้าขายดี
            <DecorativeSymbolIcon variant="5" />
          </h2>
          <p className="mb-5 font-bold text-white">ข้อมูลประจำวันที่ 30 สิงหาคม 2567 ถึงปัจจุบัน</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px] text-white">อันดับ</TableHead>
                <TableHead className="text-white">ชื่อประเภท</TableHead>
                <TableHead className="text-white">มูลค่ารวม</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-white">
              {[1, 2, 3, 4, 5].map(item => (
                <TableRow key={item}>
                  <TableCell className="text-center">{item}</TableCell>
                  <TableCell>ชื่อประเภท</TableCell>
                  <TableCell>{formatNumber(item * 100000)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
