import { ChevronRight } from 'lucide-react'

import Headline from '@/components/shared/Headline'
import ServerPagination from '@/components/shared/ServerPagination'
import { Button } from '@/components/ui/button'
import type { Auction } from '@/features/products/types/auction'
import { Link } from '@/i18n/routing'

import AuctionCard from './AuctionCard'

interface AuctionListProps {
  searchParams: Record<string, string | number | null>
  title: string | null
  auctions: Auction[]
  viewAllLink?: string
  page?: number | null
  total?: number | null
}

export default function AuctionList({
  searchParams,
  title,
  viewAllLink,
  auctions,
  page,
  total,
}: AuctionListProps) {
  const isPreview = !page && !total

  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <Headline>{title}</Headline>
        {viewAllLink && (
          <Button variant="ghost" asChild>
            <Link href={viewAllLink}>
              ดูทั้งหมด
              <ChevronRight />
            </Link>
          </Button>
        )}
      </div>
      <div className="mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {auctions.map(auction => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
      {!isPreview && <ServerPagination searchParams={searchParams} page={page} total={total} />}
    </section>
  )
}
