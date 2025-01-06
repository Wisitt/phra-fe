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
import {
  getPaginatedFollowedUserProducts,
  getProductTypes,
} from '@/features/products/api/product'
import ProductList from '@/features/products/components/ProductList'
import ProductsNavbar from '@/features/products/components/ProductsNavbar'
import ProductTypeList from '@/features/products/components/ProductTypeList'

import { searchParamsCache, serializeSearchParams } from '../searchParams'

interface FollowedUsersProps {
  searchParams: SearchParams
}

export default async function FollowedUsers({ searchParams }: FollowedUsersProps) {
  const t = await getTranslations('Common')

  const parsedSearchParams = searchParamsCache.parse(searchParams)

  const [paginatedFollowedUserProducts, productTypes] = await Promise.all([
    getPaginatedFollowedUserProducts(serializeSearchParams(parsedSearchParams)),
    getProductTypes(),
  ])

  const selectedProductCategoryName = productTypes.find(productType => productType.id === parsedSearchParams.category_id)?.name

  return (
    <>
      <ProductsNavbar />
      <div className="container grid items-start gap-8 pb-10 pt-5 xl:grid-cols-[325px_1fr]">
        <ProductTypeList searchParams={parsedSearchParams} selectedProductTypeId={parsedSearchParams.category_id} productTypes={productTypes} />
        <div className="space-y-5">
          <Breadcrumb>
            <BreadcrumbList className="text-primary-300">
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-primary"
                  href="/products"
                >
                  {t('rent_sell')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {parsedSearchParams.category_id && (
                <>
                  <BreadcrumbSeparator className="[&>svg]:size-3" />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={{
                        pathname: '/products',
                        query: { category_id: parsedSearchParams.category_id },
                      }}
                      className="hover:text-primary"
                    >
                      {selectedProductCategoryName}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
              <BreadcrumbSeparator className="[&>svg]:size-3" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-inherit">
                  {t('followed_users')}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ProductList
            searchParams={parsedSearchParams}
            title={t('followed_users')}
            products={paginatedFollowedUserProducts.items}
            page={parsedSearchParams.page}
            total={paginatedFollowedUserProducts.total}
          />
        </div>
      </div>
    </>
  )
}
