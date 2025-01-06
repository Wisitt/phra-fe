import { useTranslations } from 'next-intl'

import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SubscriptionForm() {
  const t = useTranslations('Common')

  return (
    <>
      <h3 className="mb-5 flex items-center gap-1 font-bold">
        <ThaiDecorationIcon variant="8" />
        สมัครรับข้อมูลข่าวสาร
        <ThaiDecorationIcon variant="8" />
      </h3>
      <div className="mb-2 flex gap-4">
        <Input className="rounded-full text-black" placeholder="Email" />
        <Button variant="outline" className="rounded-full">
          {t('confirm')}
        </Button>
      </div>
    </>
  )
}
