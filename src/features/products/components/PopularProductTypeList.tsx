import { ArrowRightIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Headline from '@/components/shared/Headline'
import { Button } from '@/components/ui/button'
import type { PopularProductType } from '@/features/products/types/product'

interface Props {
  popularProductTypes: PopularProductType[]
}

export default function PopularProductTypeList({ popularProductTypes }: Props) {
  const t = useTranslations('Common')

  return (
    <section>
      <Headline className="mb-5">{t('popular_product_type')}</Headline>
      <div className="flex h-[200px] gap-4">
        {popularProductTypes.map(popularProductType => (
          <div
            key={popularProductType.id}
            style={{
              backgroundImage: `url(${popularProductType.image})`,
            }}
            className="group size-full cursor-pointer overflow-hidden rounded-[200px] bg-black bg-center bg-no-repeat p-2 transition-[border-radius,width] duration-300 hover:w-[200%] hover:rounded-[20px]"
          >
            <div className="ml-auto grid h-full w-1/2 place-content-center rounded-xl bg-white/10 text-white opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
              {popularProductType.name}
              <Button
                variant="secondaryInverted"
                className="absolute bottom-3 right-3 size-[28px] rounded-full p-0"
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
