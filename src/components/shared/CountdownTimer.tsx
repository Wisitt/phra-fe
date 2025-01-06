import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

import { cn } from '@/lib/utils'

interface CountdownTimerProps extends React.HTMLAttributes<HTMLSpanElement> {
  initialMinutes: number
  onFinish?: () => void
}

export interface CountdownTimerRef {
  resetTimer: () => void
}

const CountdownTimer = forwardRef<CountdownTimerRef, CountdownTimerProps>(
  ({ initialMinutes, className, onFinish }, ref) => {
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
    const [initialTimeLeft, setInitialTimeLeft] = useState(initialMinutes * 60)

    useImperativeHandle(ref, () => ({
      resetTimer: () => {
        setTimeLeft(initialTimeLeft)
      },
    }))

    useEffect(() => {
      setInitialTimeLeft(initialMinutes * 60)
      setTimeLeft(initialMinutes * 60)
    }, [initialMinutes])

    useEffect(() => {
      if (timeLeft <= 0) {
        onFinish?.()
        return
      }

      const intervalId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1)
      }, 1000)

      return () => clearInterval(intervalId)
    }, [timeLeft, onFinish])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
      <span className={cn('flex justify-center text-[#0855C5]', className)}>
        {minutes.toString().padStart(2, '0')}
        :
        {seconds.toString().padStart(2, '0')}
      </span>
    )
  },
)
CountdownTimer.displayName = 'CountdownTimer'

export default CountdownTimer
