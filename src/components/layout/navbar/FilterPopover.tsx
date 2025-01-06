import { Filter } from 'lucide-react'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { Bar, BarChart } from 'recharts'

import { Button } from '@/components/ui/button'
import { ChartContainer } from '@/components/ui/chart'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RangeSlider } from '@/components/ui/range-slider'
import { Separator } from '@/components/ui/separator'

const priceRates = [
  {
    value: 100,
    total: 100,
  },
  {
    value: 200,
    total: 200,
  },
  {
    value: 300,
    total: 300,
  },
  {
    value: 400,
    total: 400,
  },
  {
    value: 500,
    total: 500,
  },
  {
    value: 600,
    total: 600,
  },
  {
    value: 700,
    total: 700,
  },
  {
    value: 800,
    total: 800,
  },
  {
    value: 900,
    total: 900,
  },
  {
    value: 1000,
    total: 1000,
  },
]

priceRates.push(...priceRates.toReversed())

const sellerRoles = [
  {
    id: 1,
    name: 'นักเล่นพระ',
  },
  {
    id: 2,
    name: 'เซียนพระ',
  },
]

const certifications = [
  {
    id: 1,
    name: 'ใบรับรองพระแท้',
  },
  {
    id: 2,
    name: 'เซียนพระรับรอง',
  },
]

const deliveryMethods = [
  {
    id: 1,
    name: 'ขนส่ง',
  },
  {
    id: 2,
    name: 'นัดรับ',
  },
]

export default function FilterPopover() {
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 5000,
    sellerRoleIds: [] as number[],
    certificationIds: [] as number[],
    deliveryMethodIds: [] as number[],
  })

  const handlePriceRangeChange = (values: [number, number]) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      minPrice: values[0],
      maxPrice: values[1],
    }))
  }

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      minPrice: Number.parseInt(e.target.value),
    }))
  }

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      maxPrice: Number.parseInt(e.target.value),
    }))
  }

  const handleClearClick = () => {
    setFilter({
      minPrice: 0,
      maxPrice: 5000,
      sellerRoleIds: [],
      certificationIds: [],
      deliveryMethodIds: [],
    })
  }

  const handleConfirmClick = () => {
    console.log(filter)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="iconXs" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-wafer-500 hover:bg-wafer-500/80">
          <Filter width={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-3">
        <h4 className="font-bold">ตัวกรอง</h4>
        <Separator className="my-2" />
        <div className="mb-6 space-y-3">
          <ChartContainer config={{}} className="h-20 w-full">
            <BarChart accessibilityLayer data={priceRates}>
              <Bar dataKey="value" fill="#BAB1AF" />
            </BarChart>
          </ChartContainer>
          <RangeSlider
            value={[filter.minPrice, filter.maxPrice]}
            onValueChange={handlePriceRangeChange}
            min={0}
            max={5000}
            step={1}
          />
          <div className="grid grid-cols-2 gap-2">
            <Label className="flex flex-col gap-2">
              ราคาต่ำสุด
              <Input
                value={filter.minPrice}
                onChange={handleMinPriceChange}
                placeholder="ราคาต่ำสุด"
              />
            </Label>
            <Label className="flex flex-col gap-2">
              ราคาสูงสุด
              <Input
                value={filter.maxPrice}
                onChange={handleMaxPriceChange}
                placeholder="ราคาสูงสุด"
              />
            </Label>
          </div>
          <div className="space-y-2">
            <h5>ผู้ลงสินค้า</h5>
            <div className="grid grid-cols-2 gap-2">
              {sellerRoles.map(sellerRole => (
                <Label key={sellerRole.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={filter.sellerRoleIds.includes(sellerRole.id)}
                    onCheckedChange={(checked) => {
                      setFilter(prevFilter => ({
                        ...prevFilter,
                        sellerRoleIds: checked
                          ? [...prevFilter.sellerRoleIds, sellerRole.id]
                          : prevFilter.sellerRoleIds.filter(id => id !== sellerRole.id),
                      }))
                    }}
                  />
                  {sellerRole.name}
                </Label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h5>การรับรอง</h5>
            <div className="grid grid-cols-2 gap-2">
              {certifications.map(certification => (
                <Label key={certification.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={filter.certificationIds.includes(certification.id)}
                    onCheckedChange={(checked) => {
                      setFilter(prevFilter => ({
                        ...prevFilter,
                        certificationIds: checked
                          ? [...prevFilter.certificationIds, certification.id]
                          : prevFilter.certificationIds.filter(id => id !== certification.id),
                      }))
                    }}
                  />
                  {certification.name}
                </Label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h5>การรับสินค้า</h5>
            <div className="grid grid-cols-2 gap-2">
              {deliveryMethods.map(deliveryMethod => (
                <Label key={deliveryMethod.id} className="flex items-center gap-2">
                  <Checkbox
                    checked={filter.deliveryMethodIds.includes(deliveryMethod.id)}
                    onCheckedChange={(checked) => {
                      setFilter(prevFilter => ({
                        ...prevFilter,
                        deliveryMethodIds: checked
                          ? [...prevFilter.deliveryMethodIds, deliveryMethod.id]
                          : prevFilter.deliveryMethodIds.filter(id => id !== deliveryMethod.id),
                      }))
                    }}
                  />
                  {deliveryMethod.name}
                </Label>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={handleClearClick} variant="ghost">
            ล้าง
          </Button>
          <Button onClick={handleConfirmClick}>ตกลง</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
