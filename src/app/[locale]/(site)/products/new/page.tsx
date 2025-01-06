import { EditIcon } from 'lucide-react'

import NavigationBar from '@/components/shared/NavigationBar'
import { Button } from '@/components/ui/button'
import OccupyForm from '@/features/products/components/OccupyForm'
import { Link } from '@/i18n/routing'

export default function Occupy() {
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
            label: 'ครอบครอง',
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
      <OccupyForm />
    </div>
  )
}
