import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { ProductType } from '@/features/products/types/product'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatter'

interface Props {
  searchParams: Record<string, string | number | null>
  selectedProductTypeId: number | null
  productTypes: ProductType[]
}

export default function ProductTypeList({ searchParams, selectedProductTypeId, productTypes }: Props) {
  const total = productTypes.reduce((acc, productType) => acc + productType.amount, 0)

  return (
    <Card className="overflow-hidden border-2 border-primary-200">
      <CardHeader className="flex-row items-center gap-2 bg-primary-200 px-2 pb-2 pt-3">
        <CardTitle className="flex-1 text-center font-normal">ประเภทวัตถุมงคล</CardTitle>
        <CardDescription className="text-base font-bold text-black">
          {formatNumber(total)}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {productTypes.map(productType => (
          <Link
            key={productType.id}
            href={{
              pathname: '',
              query: {
                ...searchParams,
                category_id: selectedProductTypeId === productType.id ? null : productType.id,
              },
            }}
            className={cn(
              'flex cursor-pointer items-center justify-between px-2 py-1 hover:bg-primary-100',
              selectedProductTypeId === productType.id && '!bg-primary-200',
            )}
          >
            <span className="inline-flex items-center gap-2">
              <ThaiDecorationIcon variant="12" className="text-primary-300" />
              {productType.name}
            </span>
            {formatNumber(productType.amount)}
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
