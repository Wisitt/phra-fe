'use client'

import 'air-datepicker/air-datepicker.css'

import AirDatepicker from 'air-datepicker'
import localeTh from 'air-datepicker/locale/th'
import { CalendarIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { dayjs } from '@/lib/dayjs'

import { Input } from './input'

interface DatePickerProps {
  placeholder?: string
  onlyTimepicker?: boolean
  value: Date | null
  onChange: (date: Date | null) => void
}

export function DatePicker(props: DatePickerProps) {
  const { placeholder, onlyTimepicker, value, onChange } = props
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const dp = new AirDatepicker(inputRef.current!, {
      onlyTimepicker,
      timepicker: onlyTimepicker,
      locale: localeTh,
      selectedDates: value ? [value] : undefined,
      onSelect: ({ date }) => onChange(date as Date || null),
      dateFormat: date => dayjs(date).format('D MMMM BBBB'),
      onRenderCell: ({ date, cellType }) => {
        if (cellType === 'year') {
          return { html: dayjs(date).format('BBBB') }
        }
      },
      navTitles: {
        years: (dp: AirDatepicker) => {
          const firstYear = Math.floor(dp.viewDate.getFullYear() / 10) * 10
          const startYear = dayjs().year(firstYear).format('BBBB')
          const endYear = dayjs().year(firstYear + 9).format('BBBB')
          return `${startYear} - ${endYear}`
        },
        months: dp => dayjs(dp.viewDate).format('BBBB'),
        days: dp => dayjs(dp.viewDate).format('MMMM, BBBB'),
      },
    })

    return () => dp.destroy()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative">
      <Input ref={inputRef} placeholder={placeholder} readOnly />
      <CalendarIcon size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  )
}
