import Image from 'next/image'

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

export default function PromptPayPayment() {
  return (
    <DialogContent className="max-h-[95vh] max-w-[549px] gap-6">
      <DialogHeader className="space-y-2">
        <DialogTitle className="text-center text-2xl">ชำระเงินผ่านช่องทาง PromptPay</DialogTitle>
        <Separator />
        <DialogDescription className="text-center text-base">
          สแกนเพื่อชำระเงินค่าสมาชิก 1,000 บาท
        </DialogDescription>
      </DialogHeader>
      <div className="mx-auto flex w-full max-w-[267px] flex-col items-center overflow-hidden rounded-[20px] pb-5 shadow">
        <div className="flex w-full items-center justify-center bg-[#036] p-4">
          <Image src="/thai-qr-payment-logo.png" alt="thaiqr payment logo" />
        </div>
        <Image className="my-3" src="/thai-qr-payment-logo.png" alt="promptpay logo" width={75} />
        <Image
          className="mb-6"
          src="https://hexdocs.pm/qr_code/docs/qrcode.svg"
          alt="promptpay qr code"
          width={170}
          height={170}
        />
        <h3>บริษัท ส่องพระ จำกัด</h3>
        <h3 className="mb-2">SONG PHRA CO.,LTD</h3>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          Reference no.
          {' '}
          <span>SPSS1X52WEWD</span>
        </p>
      </div>
    </DialogContent>
  )
}
