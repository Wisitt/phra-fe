import { getTranslations } from 'next-intl/server'
import type { SearchParams } from 'nuqs/server'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getAuctionProductTypes, getPaginatedFollowedAuctions } from '@/features/products/api/auction'
import AuctionList from '@/features/products/components/auction/AuctionList'
import AuctionsNavbar from '@/features/products/components/auction/AuctionsNavbar'
import ProductTypeList from '@/features/products/components/ProductTypeList'

import { searchParamsCache, serializeSearchParams } from '../../searchParams'

interface FollowedAuctionsProps {
  searchParams: SearchParams
}

export default async function FollowedAuctions({ searchParams }: FollowedAuctionsProps) {
  const t = await getTranslations('Common')

  const parsedSearchParams = searchParamsCache.parse(searchParams)

  const [
    paginatedFollowedAuctions,
    auctionProductTypes,
  ] = await Promise.all([
    getPaginatedFollowedAuctions(serializeSearchParams(parsedSearchParams)),
    getAuctionProductTypes(),
  ])

  const selectedAuctionProductCategoryName = auctionProductTypes.find(productType => productType.id === parsedSearchParams.category_id)?.name

  return (
    <>
      <AuctionsNavbar />
      <div className="container grid items-start gap-8 pb-10 pt-5 xl:grid-cols-[325px_1fr]">
        <ProductTypeList searchParams={parsedSearchParams} selectedProductTypeId={parsedSearchParams.category_id} productTypes={auctionProductTypes} />
        <div className="space-y-5">
          <Breadcrumb>
            <BreadcrumbList className="text-primary-300">
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-primary"
                  href="/auctions"
                >
                  {t('auctions')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {parsedSearchParams.category_id && (
                <>
                  <BreadcrumbSeparator className="[&>svg]:size-3" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-inherit">
                      {selectedAuctionProductCategoryName}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
              <BreadcrumbSeparator className="[&>svg]:size-3" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-inherit">
                  {t('followed_products')}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <AuctionList
            searchParams={parsedSearchParams}
            title={selectedAuctionProductCategoryName || t('followed_products')}
            auctions={paginatedFollowedAuctions.items}
            page={parsedSearchParams.page}
            total={paginatedFollowedAuctions.total}
          />
        </div>
      </div>
    </>
  )
}
