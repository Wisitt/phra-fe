import { EditIcon, PlusIcon } from 'lucide-react'

import SearchInput from '@/components/layout/navbar/SearchInput'
import TopSearchList from '@/components/layout/navbar/TopSearchList'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

interface AuctionNavbarProps {
  productId?: number
}

export default function AuctionNavbar({ productId }: AuctionNavbarProps) {
  const isOwner = false

  return (
    <nav className="py-4">
      <div className="container grid items-center gap-8 lg:grid-cols-[325px_1fr_auto]">
        <TopSearchList pathname="/auctions" onDark />
        <SearchInput pathname="/auctions" />
        <Button className="rounded-full" variant="lightest" asChild>
          <Link href={isOwner ? `/auctions/${productId}/edit` : '/auctions/new'}>
            {isOwner
              ? (
                  <>
                    แก้ไขสินค้า
                    <EditIcon />
                  </>
                )
              : (
                  <>
                    เพิ่มสินค้า
                    <PlusIcon />
                  </>
                )}
          </Link>
        </Button>
      </div>
    </nav>
  )
}
