import { ChevronLeft, ChevronRight, Copy, Scan } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { useStepper } from '@/components/ui/stepper'
import { cn } from '@/lib/utils'

import PromptPayPayment from './prompt-pay-payment'

const paymentOptions = [
  {
    id: 'scb',
    name: 'ธนาคารกสิกรไทย',
    description: 'บริษัท ส่องพระ จำกัด สาขาพุทธมณฑล ประเภทกระแสรายวัน',
    logo: '/payments/scb.png',
    accountNumber: '115-3-024323',
  },
  {
    id: 'bay',
    name: 'ธนาคารกรุงศรี',
    description: 'บริษัท ส่องพระ จำกัด สาขาพุทธมณฑล ประเภทกระแสรายวัน',
    logo: '/payments/bay.png',
    accountNumber: '115-3-024323',
  },
  {
    id: 'kbank',
    name: 'ธนาคารกรุงไทย',
    description: 'บริษัท ส่องพระ จำกัด สาขาพุทธมณฑล ประเภทกระแสรายวัน',
    logo: '/payments/kbank.png',
    accountNumber: '115-3-024323',
  },
  {
    id: 'pp',
    name: 'Prompt Pay',
    description: 'บริษัท ส่องพระ จำกัด',
    logo: '/payments/pp.png',
    accountNumber: '',
  },
] as const

export default function MembershipPayment() {
  const { prevStep, nextStep } = useStepper()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-2xl font-bold text-white">ชำระค่าสมาชิก</h1>
      <p className="mb-5 text-white">
        กรุณาเลิอกบัญชีในการชำระค่าสมาชิก เป็นจำนวนเงิน 1,000 บาท (และจะต้องชำระค่าสมาชิกรายปี 500
        ในปีถัดไป)
      </p>
      <ul className="mb-[28px] w-full space-y-4 pb-[18px]">
        {paymentOptions.map(option => (
          <li
            key={option.id}
            className={cn(
              'flex items-start justify-between rounded-lg border-2 border-primary bg-white p-4',
              option.id === 'pp' && 'items-center',
            )}
          >
            <div className="flex items-center gap-4">
              <div className="px-[30.5px]">
                <Image width={48} height={48} src={option.logo} alt={option.name} />
              </div>
              <div>
                <p className="mb-2 font-bold">{option.name}</p>
                <p>{option.description}</p>
              </div>
            </div>
            {option.accountNumber && (
              <div className="flex items-center gap-2">
                {option.accountNumber}
                <Button
                  onClick={() => navigator.clipboard.writeText(option.accountNumber)}
                  variant="ghost"
                  size="icon"
                >
                  <Copy />
                </Button>
              </div>
            )}
            {option.id === 'pp' && (
              <>
                <Button onClick={() => setIsOpen(true)}>
                  สร้าง QR Code เพื่อชำระเงิน
                  <Scan />
                </Button>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <PromptPayPayment />
                </Dialog>
              </>
            )}
          </li>
        ))}
      </ul>
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
