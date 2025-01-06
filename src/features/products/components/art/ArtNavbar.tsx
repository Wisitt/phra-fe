import { PlusIcon } from 'lucide-react'

import SearchInput from '@/components/layout/navbar/SearchInput'
import TopSearchList from '@/components/layout/navbar/TopSearchList'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

export default function ArtNavbar() {
  return (
    <nav className="bg-primary-50 py-4">
      <div className="container grid items-center gap-8 lg:grid-cols-[325px_1fr_auto]">
        <TopSearchList />
        <SearchInput />
        <Button className="rounded-full" variant="outline" asChild>
          <Link href="/new?returnUrl=/products">
            เพิ่มสินค้า
            <PlusIcon />
          </Link>
        </Button>
      </div>
    </nav>
  )
}
