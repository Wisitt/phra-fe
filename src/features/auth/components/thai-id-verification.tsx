import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { useStepper } from '@/components/ui/stepper'

export default function ThaiIdVerification() {
  const { prevStep, nextStep } = useStepper()

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="mb-[22px] text-2xl font-bold">ยืนยันตัวตน</h1>
      <div className="mb-8 flex flex-col items-center gap-[20px] text-center">
        <p>กรุณายืนยันตัวตนเพื่อสมัครสมาชิกและเข้าระบบด้วย Thai ID</p>
        <div className="rounded-[20px] bg-white p-3">
          <Image
            src="https://hexdocs.pm/qr_code/docs/qrcode.svg"
            alt="thai id qr code"
            width={300}
            height={300}
          />
        </div>
        <p>
          คิวอาร์โค้ดนี้เป็นสิ่งยืนยันตัวตนทางดิจิทัล ออกให้โดย
          <br />
          กรมการปกครอง กระทรวงมหาดไทย
        </p>
      </div>
      <div className="flex w-full justify-between">
        <Button
          onClick={prevStep}
          variant="outline"
          className="h-[44px] w-[138px] rounded-full"
          type="button"
        >
          <ChevronLeft />
          ย้อนกลับ
        </Button>
        <Button onClick={nextStep} variant="outline" className="h-[44px] w-[138px] rounded-full">
          ต่อไป
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
