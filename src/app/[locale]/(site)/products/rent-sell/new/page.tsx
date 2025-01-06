import { EditIcon } from 'lucide-react'

import NavigationBar from '@/components/shared/NavigationBar'
import { Button } from '@/components/ui/button'
import RentReleaseForm from '@/features/products/components/RentReleaseForm'
import { Link } from '@/i18n/routing'

export default function RentSell() {
  return (
    <div className="container pb-[60px]">
      <NavigationBar
        returnHref="/new"
        items={[
          {
            href: '/new',
            label: 'เพิ่มสินค้าใหม่',
          },
          {
            label: 'เช่า/ปล่อย',
          },
        ]}
      >
        <Button className="rounded-full" variant="lightest" asChild>
          <Link href="/products/draft">
            ฉบับร่าง
            <EditIcon />
          </Link>
        </Button>
      </NavigationBar>
      <RentReleaseForm />
    </div>
  )
}
