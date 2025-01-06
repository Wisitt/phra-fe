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
import { getAuctionProductTypes, getPaginatedAuctions, getPopularAuctionProductTypes, getPreviewFollowedAuctions, getRandomAuction } from '@/features/products/api/auction'
import AuctionList from '@/features/products/components/auction/AuctionList'
import AuctionsNavbar from '@/features/products/components/auction/AuctionsNavbar'
import PopularProductTypeList from '@/features/products/components/PopularProductTypeList'
import ProductTypeList from '@/features/products/components/ProductTypeList'
import RandomProduct from '@/features/products/components/RandomProduct'

import { searchParamsCache, serializeSearchParams } from '../searchParams'

interface AuctionsProps {
  searchParams: SearchParams
}

export default async function Auctions({ searchParams }: AuctionsProps) {
  const t = await getTranslations('Common')

  const parsedSearchParams = searchParamsCache.parse(searchParams)

  const [
    previewFollowedAuctions,
    paginatedAuctions,
    auctionProductTypes,
    randomAuction,
    popularAuctionProductTypes,
  ] = await Promise.all([
    getPreviewFollowedAuctions(),
    getPaginatedAuctions(serializeSearchParams(parsedSearchParams)),
    getAuctionProductTypes(),
    getRandomAuction(),
    getPopularAuctionProductTypes(),
  ])

  const selectedAuctionProductCategoryName = auctionProductTypes.find(productType => productType.id === parsedSearchParams.category_id)?.name

  const getTitle = (): string => {
    if (parsedSearchParams.q && parsedSearchParams.category_id) {
      return `ค้นหา ${parsedSearchParams.q} ใน ${selectedAuctionProductCategoryName}`
    }
    else if (parsedSearchParams.q) {
      return `ค้นหา ${parsedSearchParams.q}`
    }
    return selectedAuctionProductCategoryName || t('all_products')
  }

  const title = getTitle()

  return (
    <>
      <AuctionsNavbar />
      <div className="container grid items-start gap-8 pb-10 pt-5 xl:grid-cols-[325px_1fr]">
        <ProductTypeList searchParams={parsedSearchParams} selectedProductTypeId={parsedSearchParams.category_id} productTypes={auctionProductTypes} />
        <div className="space-y-5">
          {parsedSearchParams.category_id && (
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
                <BreadcrumbSeparator className="[&>svg]:size-3" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-inherit">
                    {selectedAuctionProductCategoryName}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}
          <div className="space-y-10">
            {(!parsedSearchParams.q && !parsedSearchParams.category_id) && (
              <>
                <RandomProduct auction randomProduct={randomAuction} />
                <PopularProductTypeList popularProductTypes={popularAuctionProductTypes} />
                <AuctionList
                  searchParams={parsedSearchParams}
                  title={t('followed_products')}
                  viewAllLink="/auctions/followed"
                  auctions={previewFollowedAuctions}
                />
              </>
            )}
            <AuctionList
              title={title}
              searchParams={parsedSearchParams}
              auctions={paginatedAuctions.items}
              page={parsedSearchParams.page}
              total={paginatedAuctions.total}
            />
          </div>
        </div>
      </div>
    </>
  )
}
