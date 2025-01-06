'use client'

import type { ComponentPropsWithoutRef } from 'react'
import React, { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { dayjs } from '@/lib/dayjs'
import { cn } from '@/lib/utils'
import { formatLongDate, formatMediumDate } from '@/utils/formatter'

interface Props extends ComponentPropsWithoutRef<typeof Badge> {
  startDateTime: Date
  endDateTime: Date
  compact?: boolean
}

export default function AuctionStatusBadge({ startDateTime, endDateTime, compact = true, className, ...props }: Props) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const isIn24Hours = dayjs(endDateTime).diff(dayjs(), 'hours') <= 24
  const { days, hours, minutes, seconds } = remainingTime

  const isOpen
  = dayjs().isSameOrAfter(dayjs(startDateTime))
  && dayjs().isSameOrBefore(dayjs(endDateTime))

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (isOpen) {
      const updateRemainingTime = () => {
        const diffms = dayjs(endDateTime).diff(dayjs())
        setRemainingTime({
          days: Math.floor(diffms / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diffms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diffms % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diffms % (1000 * 60)) / 1000),
        })
      }
      updateRemainingTime()
      intervalId = setInterval(updateRemainingTime, 1000)
    }
    return () => clearInterval(intervalId)
  }, [endDateTime, isOpen])

  return (
    <Badge
      variant="secondaryInverted"
      className={cn(
        'flex h-[30px] max-w-[30px] gap-1 overflow-hidden text-nowrap rounded-full p-1 pr-2 text-xs transition-[max-width] hover:max-w-full',
        isIn24Hours && 'max-w-full',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'grid aspect-square h-full place-content-center',
          isOpen && 'relative after:absolute after:h-full after:w-full after:animate-ripple after:rounded-full after:bg-destructive/15',
        )}
      >
        <div className={cn('size-2 rounded-full', isOpen ? 'bg-destructive' : 'bg-muted')} />
      </div>
      {isOpen
        ? (
            <>
              {days > 0 && (
                <>
                  <b>{days}</b>
                  d
                </>
              )}
              <b>{hours}</b>
              h
              <b>{minutes}</b>
              m
              {
                days === 0 && (
                  <>
                    <b>{seconds}</b>
                    s
                  </>
                )
              }
            </>
          )
        : (
            <>
              {compact ? 'เปิดประมูล' : 'เริ่มเปิดประมูล'}
              <b>
                {compact ? formatMediumDate(startDateTime) : formatLongDate(startDateTime)}
              </b>
            </>
          )}
    </Badge>
  )
}
