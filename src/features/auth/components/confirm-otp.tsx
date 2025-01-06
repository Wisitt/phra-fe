import { useRef, useState } from 'react'

import type { CountdownTimerRef } from '@/components/shared/CountdownTimer'
import CountdownTimer from '@/components/shared/CountdownTimer'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Separator } from '@/components/ui/separator'

export default function ConfirmOtp() {
  const [isDisabled, setIsDisabled] = useState(false)
  const countdownTimerRef = useRef<CountdownTimerRef>(null)

  const handleResendOtpClick = () => {
    setIsDisabled(false)
    countdownTimerRef.current?.resetTimer()
  }

  const handleFinish = () => setIsDisabled(true)

  return (
    <DialogContent className="max-h-[95vh] max-w-[549px] gap-6">
      <DialogHeader className="space-y-2">
        <DialogTitle className="text-center text-2xl">กรุณากรอกรหัสยืนยัน OTP</DialogTitle>
        <Separator />
        <DialogDescription className="text-center text-base">
          ระบบได้ทำการส่งรหัสยืนยัน OTP 6 หลัก ไปที่หมายเลข xxx-xxxxxxx
          <br />
          กรุณาตรวจสอบ SMS ของท่าน
        </DialogDescription>
      </DialogHeader>
      <InputOTP className="!w-full" containerClassName="justify-center" maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={4} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div>
        <CountdownTimer
          ref={countdownTimerRef}
          className="mb-2 text-center"
          initialMinutes={5}
          onFinish={handleFinish}
        />
        <div className="flex items-center justify-center gap-3">
          <span className="text-muted-foreground">ไม่ได้รับรหัส OTP ใช่หรือไม่?</span>
          <Button
            onClick={handleResendOtpClick}
            variant="link"
            className="!h-auto p-0 text-black underline"
          >
            ให้ระบบส่งรหัส OTP อีกครั้ง
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <DialogClose asChild>
          <Button type="button" className="w-[100px] rounded-full" disabled={isDisabled}>
            ยืนยัน
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  )
}
