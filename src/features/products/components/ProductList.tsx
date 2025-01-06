import { ChevronRight } from 'lucide-react'

import Headline from '@/components/shared/Headline'
import ServerPagination from '@/components/shared/ServerPagination'
import { Button } from '@/components/ui/button'
import type { Product } from '@/features/products/types/product'
import { Link } from '@/i18n/routing'

import ProductCard from './ProductCard'

interface Props {
  searchParams: Record<string, string | number | null>
  title: string
  viewAllLink?: string
  products: Product[]
  page?: number | null
  total?: number | null
}

export default function ProductList({ searchParams, title, viewAllLink, products, page, total }: Props) {
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
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
      {!isPreview && <ServerPagination searchParams={searchParams} page={page} total={total} />}
    </section>
  )
}
