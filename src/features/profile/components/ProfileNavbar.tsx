import { ChevronLeft, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

export default function ProfileNavbar() {
  const returnLink = '/'

  return (
    <nav className="absolute left-0 z-10 flex w-full items-center justify-between py-4">
      <Link href={returnLink} className="inline-flex items-center gap-2">
        <ChevronLeft />
        ย้อนกลับ
      </Link>
      <Button className="rounded-full" variant="lightest" asChild>
        <Link href="/new">
          เพิ่มสินค้า
          <PlusIcon />
        </Link>
      </Button>
    </nav>
  )
}
