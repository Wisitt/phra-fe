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
  getFollowedUserProducts,
  getPopularProductTypes,
  getProducts,
  getProductTypes,
  getRandomProduct,
} from '@/features/products/api/product'
import PopularProductTypeList from '@/features/products/components/PopularProductTypeList'
import ProductList from '@/features/products/components/ProductList'
import ProductsNavbar from '@/features/products/components/ProductsNavbar'
import ProductTypeList from '@/features/products/components/ProductTypeList'
import RandomProduct from '@/features/products/components/RandomProduct'

import { searchParamsCache, serializeSearchParams } from './searchParams'

interface ProductsProps {
  searchParams: SearchParams
}

export default async function Products({ searchParams }: ProductsProps) {
  const t = await getTranslations('Common')

  const parsedSearchParams = searchParamsCache.parse(searchParams)

  const [products, followedUserProducts, productTypes, randomProduct, popularProductTypes] = await Promise.all([
    getProducts(serializeSearchParams(parsedSearchParams)),
    getFollowedUserProducts(),
    getProductTypes(),
    getRandomProduct(),
    getPopularProductTypes(),
  ])

  const selectedProductCategoryName = productTypes.find(productType => productType.id === parsedSearchParams.category_id)?.name

  const getTitle = (): string => {
    if (parsedSearchParams.q && parsedSearchParams.category_id) {
      return `ค้นหา ${parsedSearchParams.q} ใน ${selectedProductCategoryName}`
    }
    else if (parsedSearchParams.q) {
      return `ค้นหา ${parsedSearchParams.q}`
    }
    return selectedProductCategoryName || t('all_products')
  }

  const title = getTitle()

  return (
    <>
      <ProductsNavbar />
      <div className="container grid items-start gap-8 pb-10 pt-5 xl:grid-cols-[325px_1fr]">
        <ProductTypeList searchParams={parsedSearchParams} selectedProductTypeId={parsedSearchParams.category_id} productTypes={productTypes} />
        <div className="space-y-5">
          {parsedSearchParams.category_id && (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-xs text-primary-300 hover:text-primary"
                    href="/products"
                  >
                    {t('rent_sell')}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3 [&>svg]:text-primary-300" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-xs text-primary-300">
                    {selectedProductCategoryName}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}
          <div className="space-y-10">
            {(!parsedSearchParams.q && !parsedSearchParams.category_id) && (
              <>
                <RandomProduct randomProduct={randomProduct} />
                <PopularProductTypeList popularProductTypes={popularProductTypes} />
                <ProductList
                  searchParams={parsedSearchParams}
                  title={t('followed_users')}
                  viewAllLink="/products/followed-users"
                  products={followedUserProducts}
                />
              </>
            )}
            <ProductList
              searchParams={parsedSearchParams}
              title={title}
              products={products.items}
              page={parsedSearchParams.page}
              total={products.total}
            />
          </div>
        </div>
      </div>
    </>
  )
}
