import { MessageCircleMoreIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function ContactUs() {
  return (
    <section>
      <h2 className="mb-10 text-center text-2xl font-bold">คำถามเพิ่มเติม</h2>
      <div className="grid grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)]">
        <div className="flex flex-col items-center gap-5 py-2">
          <h3 className="font-bold">โทร</h3>
          <p className="text-2xl font-bold">+66 87-7925399</p>
          <p className="text-xs text-primary">เวลาทำการ จันทร์ - ศุกร์ 8.30 - 18.00 น.</p>
        </div>
        <Separator orientation="vertical" className="w-0.5" />
        <div className="flex flex-col items-center gap-5 py-2">
          <h3 className="font-bold">แชท</h3>
          <Button size="xss">
            แชทกับส่องพระ
            <MessageCircleMoreIcon size={20} />
          </Button>
          <p className="text-xs text-primary">เวลาทำการ จันทร์ - ศุกร์ 8.30 - 18.00 น.</p>
        </div>
      </div>
    </section>
  )
}
