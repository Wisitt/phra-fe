'use client'

import 'air-datepicker/air-datepicker.css'

import AirDatepicker from 'air-datepicker'
import { ClockIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { Input } from './input'

interface TimePickerProps {
  placeholder?: string
  value: Date | null
  onChange: (date: Date | null) => void
}

export function TimePicker(props: TimePickerProps) {
  const { placeholder, value, onChange } = props
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const dp = new AirDatepicker(inputRef.current!, {
      onlyTimepicker: true,
      timepicker: true,
      selectedDates: value ? [value] : undefined,
      onSelect: ({ date }) => onChange(date as Date || null),
    })

    return () => dp.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative">
      <Input ref={inputRef} placeholder={placeholder} readOnly />
      <ClockIcon size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  )
}
